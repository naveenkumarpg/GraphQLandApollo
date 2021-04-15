const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => {
      return "Hello World from GraphQL ..!";
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen({
    port: 9000,
  })
  .then(({ url }) => {
    console.log("Starting server at http://localhost:9000/");
  });
