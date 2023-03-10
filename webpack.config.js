const path = require('path');

module.exports = {
    entry: [
        './src/index.js',
      
    ],
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }, // tu si stal
    devServer: {
        port: 8080,
        static: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ],
      },
  };