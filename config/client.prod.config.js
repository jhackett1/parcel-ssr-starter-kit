const path = require("path")
const baseConfig = require("./base.prod.config")

module.exports = {
    ...baseConfig,
    name: "client",
    entry: "./src/client/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "../dist/public"),
    }
}
