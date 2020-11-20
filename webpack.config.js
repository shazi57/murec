const path = require('path');

const ENTRY_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: ['@babel/polyfill', `${ENTRY_DIR}/index.jsx`],
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['react-hot-loader/babel',
            ['@babel/plugin-transform-runtime',
              {
                regenerator: true,
              },
            ],
          ],
        },
      },
      {
        test: /.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|ttf)$/i,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  devServer: {
    contentBase: DIST_DIR,
    compress: true,
    filename: 'bundle.js',
    port: 9000,
  },
};
