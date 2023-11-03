/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
/* eslint-enable @typescript-eslint/no-var-requires */

const port = 3030;
const dist = path.join(__dirname, 'dist');
const src = path.join(__dirname, 'src');
const host = 'localhost';

module.exports = {
  mode: 'development',
  target: 'web',
  stats: 'minimal',
  ignoreWarnings: [/export .* was not found in/],
  context: src,
  entry: './index.tsx',
  output: {
    path: dist,
    publicPath: `http://${host}:${port}/`,
    filename: `js/[name].js`,
    chunkFilename: `js/[name].js`,
  },
  devtool: 'source-map',
  devServer: {
    port,
    hot: true,
    host,
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
    runtimeChunk: true,
  },
  resolve: {
    modules: [src, 'node_modules'],
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      src: path.resolve('./src'),
    },
    fallback: { crypto: false },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlPlugin({
      template: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css',
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.join(__dirname, 'tsconfig.json'),
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
        include: src,
        exclude: /node_modules/,
      },
      {
        test: /\.s([aс])ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]-[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: {
                  'primary-color': '#1BA829',
                  'border-radius-base': '4px',
                },
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
        include: src,
      },
      {
        test: /\.(png|gif|jpe?g)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
      },
      {
        test: /\.(woff2?|oet|([to]tf))$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
};
