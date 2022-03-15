module.exports = () => {
  return {
    name: 'webpack-plugin',
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              test: /\.html$/i,
              loader: "html-loader",
            },
          ]
        }
      }
    }
  }
}
