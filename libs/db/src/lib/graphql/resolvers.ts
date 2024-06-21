import { Tag } from "../tag.model";

export const resolvers = {
  Query: {
    tags: () => Tag.findAll(),
  }
};