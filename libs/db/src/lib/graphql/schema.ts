import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';

import { resolvers } from './resolvers';
import { typeDefs } from './typedefs';

export const dbSchema = makeExecutableSchema({
  resolvers: mergeResolvers([resolvers]),
  typeDefs: mergeTypeDefs([
    typeDefs
  ]),
});
