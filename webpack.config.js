var path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist", "assets"),
        filename: "bundle.js"
    },
    module: {
        rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}]
    },
    devtool: 'source-map' // 소스 맵을 추가하려면 이 옵션을 덧붙여라
}