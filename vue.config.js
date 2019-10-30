const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

const express = require('express')
var app = express()
var appData = require('./public/zh_cn.json')
var cnMsg = appData
var apiRoutes = express.Router()
app.use('/api',apiRoutes)
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('common', resolve('src/common'))
            .set('components', resolve('src/components'))
            .set('base', resolve('src/base'))
            .set('api', resolve('src/api'))
            .set('assets', resolve('src/assets'))
    },
    devServer: {
        before(app) {
            app.get('/api/cnMsg', (req, res) => {
                res.json({
                    errno: 0,
                    data: cnMsg
                })
            })
        }
    }
}