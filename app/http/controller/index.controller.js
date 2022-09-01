const { validationResult } = require("express-validator")

class IndexController {
    create(req, res, next){
        const resu = validationResult(req)
        return res.json(resu)
    }
}

module.exports = {
    IndexController : new IndexController()
}