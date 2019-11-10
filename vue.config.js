module.exports = {
  lintOnSave: false,
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: '@import "@/styles/config";',
      },
    },
  },
};
