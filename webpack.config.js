const { CleanWebpackPlugin } = require("clean-webpack-plugin");
<<<<<<< HEAD
const path = require("path");

module.exports = function (env, { mode }) {
  const production = mode === "production";
  return {
    mode: production ? "production" : "development",
    devtool: production ? "source-map" : "inline-source-map",
=======
const path = require('path');

module.exports = function (env, { mode }) {
  const production = mode === 'production';
  return {
    mode: production ? 'production' : 'development',
    devtool: production ? 'source-map' : 'inline-source-map',
>>>>>>> c9522bf (add accent button)
    entry: {
      app: ["./src/main.ts"],
    },
    output: {
<<<<<<< HEAD
      filename: "bundle.js",
      publicPath: "/",
      path: path.resolve(__dirname, "dist"),
=======
      filename: 'bundle.js',
      publicPath: '/'
>>>>>>> c9522bf (add accent button)
    },
    resolve: {
      extensions: [".ts", ".js"],
      modules: ["src", "node_modules"],
    },
    devServer: {
      port: 9000,
      historyApiFallback: true,
      open: !process.env.CI,
      devMiddleware: {
        writeToDisk: true,
      },
      static: {
<<<<<<< HEAD
        directory: path.join(__dirname, "./"),
      },
    },
    plugins: [new CleanWebpackPlugin()],
=======
        directory: path.join(__dirname, './')
      }
    },
    plugins: [
      new CleanWebpackPlugin()
    ],
>>>>>>> c9522bf (add accent button)
    module: {
      rules: [
        {
          test: /\.ts$/i,
          use: [
            {
              loader: path.resolve(__dirname, "./template-loader.js"),
            },
            {
              loader: "ts-loader",
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },
  };
};
