export default {
  output: {
    chunkFilename: (pathData) => {
      const firstDigitOfId = parseInt(String(pathData.chunk.id).charAt(0));
      const pathPrefix = firstDigitOfId < 5 ? "zero-through-four" : "five-through-nine";
      return `${pathPrefix}/[id].[chunkhash].js`;
    },
  },
};
