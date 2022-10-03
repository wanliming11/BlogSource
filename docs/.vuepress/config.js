module.exports = {
  plugins: [
    "@vuepress/search",
    {
      searchMaxSuggestions: 10,
    },
  ],
  themeConfig: {
    search: true,
  },
};
