const webpack = require('webpack')
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}


module.exports = {
    publicPath:'',
    outputDir:'dist/build/h5',
    css: {
        loaderOptions: {
            stylus: {
                'resolve url': true,
                'import': []
            }
        }
    },
    chainWebpack(config) {
        config.resolve.alias.set('@', resolve('src'))
        config.plugin('context').use(webpack.ContextReplacementPlugin,
            [/moment[/\\]locale$/, /zh-cn/])
    },
    devServer: {
        port: 8080,
        proxy: {
            '/demoAPi': {
                target: process.env.VUE_APP_DOMAIN,
                changeOrigin: true,
                pathRewrite: {
                    '^/demoAPi': '/demoAPi'
                }
            }
        }
    }
}