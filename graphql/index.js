const { ApolloServer } = require("apollo-server-koa");
const { typeDefs, resolvers } = require("./schema");

async function useGraphqlServer(app) {
  const apollo = new ApolloServer({ typeDefs, resolvers });
  await apollo.start();
  app.use(apollo.getMiddleware());
  console.log(
    `GraphQL server ready at http://localhost:3000${apollo.graphqlPath}`
  );
}

module.exports = useGraphqlServer;
