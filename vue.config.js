const path = require('path');

module.exports = {
  chainWebpack: (config) => {

  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/styles/config";',
      },
    },
  },
};
