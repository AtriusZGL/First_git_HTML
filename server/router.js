let express = require('express')
let router = express.Router()

let info = require('./API/list')


router.get('/list/all', info.all)


module.exports = router
