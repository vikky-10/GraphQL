const { ApolloServer } = require("apollo-server");

const mongoose = require("mongoose");

const typeDefs = require("./graphql/typedef");
const resolvers = require("./graphql/resolvers");

const { MONGODB } = require("./config.js");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`server running at ${res.url}`);
  });
