const postsResolvers = require("./posts");
const userRessolvers = require("./users");

module.exports = {
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...userRessolvers.Mutation,
  },
};
