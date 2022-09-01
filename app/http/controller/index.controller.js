class IndexController {
    create(req, res, next){
        try{
            return res.json(req.body)
        }catch(err){
            console.log(err);
            next(err);
        }
    }
}

module.exports = {
    IndexController : new IndexController()
}