const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   context: path.resolve(__dirname, 'assets'),
   entry: {
      main: './js/index.js',
   },
   output: {
      filename: 'js/[name].js',
      path: path.resolve(__dirname, './dist'),
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: 'css/[name].css',
      }),
   ],
   module: {
      rules: [
         {
            test: /\.s[ac]ss$/,
            use: [
               MiniCssExtractPlugin.loader,
               {
                  loader: 'css-loader',
                  options: {
                     importLoaders: 1,
                  },
               },
               {
                  loader: 'postcss-loader',
                  options: {
                     postcssOptions: {
                        plugins: ['autoprefixer'],
                     },
                  },
               },
               {
                  loader: 'sass-loader',
                  options: {
                     implementation: require('sass'),
                     sourceMap: true,
                  },
               },
            ],
         },
      ],
   },
};
