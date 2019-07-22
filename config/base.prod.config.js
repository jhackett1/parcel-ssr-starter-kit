const WebpackBar = require("webpackbar")

module.exports = {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(js|jsx)*/,
                exclude: /(node_modules)/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "react-dom": "@hot-loader/react-dom"
        }
    },
    plugins: [
        new WebpackBar()
    ]
}