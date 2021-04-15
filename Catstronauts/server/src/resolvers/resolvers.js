const resolvers = {
  Query: {
    // (parent, args, context, info)
    tracksForHome: (_, __, context) => {
      const { dataSources } = context;
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: (parent, __, context) => {
      const { dataSources } = context;
      const { authorId } = parent;
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};

module.exports = resolvers;
