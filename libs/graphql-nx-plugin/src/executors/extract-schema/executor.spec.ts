import { ExecutorContext } from '@nx/devkit';

import { ExtractSchemaExecutorSchema } from './schema';
import executor from './executor';

const options: ExtractSchemaExecutorSchema = {};
const context: ExecutorContext = {
  root: '',
  cwd: process.cwd(),
  isVerbose: false,
};

describe('ExtractSchema Executor', () => {
  it('can run', async () => {
    const output = await executor(options, context);
    expect(output.success).toBe(true);
  });
});
