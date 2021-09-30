const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    id: Int
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => {
      return [
        {
          id: 123,
          title: 'The Awakening',
          author: 'Kate Chopin'
        },
        {
          id: 124,
          title: 'City of Glass',
          author: 'Paul Auster'
        }
      ];
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
