const path = require("path")
const nodeExternals = require("webpack-node-externals")
const baseConfig = require("./base.config")

module.exports = {
    ...baseConfig,
    name: "server",
    entry: "./src/server/index.js",
    target: "node",
    output: {
        filename: "server.js",
        path: path.join(__dirname, "../dist"),
        libraryTarget: "commonjs2"
    },
    externals: [nodeExternals()]
}