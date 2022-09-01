const { generateImageLink } = require("../../modules/functions")

class IndexController {
    create(req, res, next){
        try{
            const image = generateImageLink(req.body.image, req);
            return res.send(image)
        }catch(err){
            next(err);
        }
    }
}

module.exports = {
    IndexController : new IndexController()
}