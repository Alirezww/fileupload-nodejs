const router = require("express").Router();
const fileUpload = require('express-fileupload');
const { IndexController } = require("../http/controller/index.controller");
const { imageValidator } = require("../http/validation/imagevalidator");

router.get("", (req, res, next) => {
    return res.json({
        message : "The home page"
    })
})

router.post("/upload-image",fileUpload(),imageValidator(), IndexController.create  )

module.exports = router