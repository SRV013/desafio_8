const path = require("path");
const dev = process.env.NODE_ENV == "development";
const liveServer = require("live-server");
if (dev) {
  liveServer.start({
    root: "./",
    file: "index.html",
  });
}
module.exports = {
  entry: "./src/index.tsx",
  watch: dev,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", {
          loader: "css-loader",
          options:{
            modules: true,
          }
        }],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".js", ".ts", ".css"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};