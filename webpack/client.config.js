const path = require("path")
const baseConfig = require("./base.config")

module.exports = {
    ...baseConfig,
    entry: "./src/client/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "../dist/public")
    }
}
