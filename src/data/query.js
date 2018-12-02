import { GraphQLObjectType } from 'graphql';

import me from './queries/me';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    me,
  },
});

export default query;
