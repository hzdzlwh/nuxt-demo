const Router = require('koa-router')

let router = new Router({
  prefix: '/search'
})

router.post('/city', async ctx => {
  ctx.body = {
    code: 0,
    result: [1,2,3]
  }
})

module.exports = router