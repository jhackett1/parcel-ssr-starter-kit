
const webpack = require("webpack")
const webpackConfig = require("../../config/dev.config.js")
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require("webpack-hot-middleware")

export default (server) => {
    const compiler = webpack(webpackConfig)
    server.use(webpackDevMiddleware(compiler, {
        noInfo: true, 
        publicPath: webpackConfig.output.publicPath
    }));
    server.use(webpackHotMiddleware(compiler));
}
