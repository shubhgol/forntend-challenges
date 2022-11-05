const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions:['.tsx','.js','.jsx','.ts','.css']
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader","css-loader"],
        // options: {
        //   modules:true,
        // }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./public/index.html'
    })
  ],
  devServer: {
    port: 3000
  }
};
