const { gql } = require("apollo-server-koa");

const Model = require("../mongo-server/models");

const typeDefs = gql`
  type User {
    userId: String
    userName: String
    userAge: Int
    userAddress: String
    userPrefer: String
  }
  input UserInput {
    userId: String
    userName: String
    userAge: Int
    userAddress: String
    userPrefer: String
  }
  type Query {
    getUserList: [User]
    getUserDetailByUserId(userId: String): User
  }
  type Mutation {
    addUser(userInfo: UserInput): User
    deleteUser(userId: String): User
  }
`;

const resolvers = {
  Query: {
    getUserList: async (parent, args, context, info) => {
      return await Model.User.find({});
    },
    getUserDetailByUserId: async (parent, { userId }, context, info) => {
      return await Model.User.findOne({ userId });
    },
  },
  Mutation: {
    addUser: async (parent, { userInfo }, context, info) => {
      return await Model.User.create(userInfo);
    },
    deleteUser: async (parent, { userId }, context, info) => {
      return await Model.User.remove({ userId });
    },
  },
};

module.exports = {
  resolvers,
  typeDefs,
};
