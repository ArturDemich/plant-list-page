const Router = require('express')

const router = new Router()

const plantsRouter = require('./plantsRouter')


router.use('/plants', plantsRouter)


module.exports = router