const path = require("path");

//to handle the environmental variables
const Dotenv = require("dotenv-webpack");

//run this with node in the browser to find the absolute path for the proj
// console.log(path.join(__dirname, 'public'));

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        //look for anything ending in .scss or .css
        test: /\.s?css$/,
        //with 'use' we can provide an array of loaders
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    //HACK - vulnerable, for dev-only.
    disableHostCheck: true,
    //for dev - allows the client side routes to work on refresh
    historyApiFallback: true
  },
  plugins: [
    new Dotenv({
      systemvars: true
    })
  ]
};
