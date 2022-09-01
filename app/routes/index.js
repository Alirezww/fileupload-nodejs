const router = require("express").Router();
const fileUpload = require('express-fileupload');
const { IndexController } = require("../http/controller/index.controller");
const { imageValidator } = require("../http/validation/imageValidator");
const { expressValidationMapper } = require("../http/middlewares/checkErrors")

router.get("", (req, res, next) => {
    return res.json({
        message : "The home page"
    })
})

router.post("/upload-image",fileUpload(),imageValidator(), expressValidationMapper , IndexController.create  )

module.exports = router