import { PromiseExecutor } from '@nx/devkit';
import * as path from 'path';
import { ExtractSchemaExecutorSchema } from './schema';

const runExecutor: PromiseExecutor<ExtractSchemaExecutorSchema> = async (
  options, context
) => {
  console.log('Executor ran for ExtractSchema', options);

  /** Import schema for generating a .graphql file */
  await import(path.resolve(context.root, options.schema)).then(mod => console.log(mod.default));

  return {
    success: true,
  };
};

export default runExecutor;
