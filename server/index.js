const app                 = new (require('koa'))()
const path                = require('path')
const koaBodyparser       = require('koa-bodyparser')
const koaJson             = require('koa-json')
const koaStatic           = require('koa-static')

const route               = require('./route')
const config              = require('./config.json')

app.use(koaBodyparser())
app.use(koaJson())
app.use(route.routes())
app.use(koaStatic(path.resolve(__dirname, '../dist')))
app.listen(config.port)
console.log(`Server start on localhost:${config.port}`)