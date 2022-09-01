const { body } = require("express-validator");
const path = require("path");

function imageValidator(){
    console.log("hiii")
    return [
        body("image")
            .custom((value,{ req }) => {
                if(!req.files) throw { status : 400, message : "it is necessary that upload a file" }

                const extensions = [".png", ".jpg", ".jpeg", ".webp", ".gif"];

                const image = req.files.image;
                const type = path.extname(image);

                if(!extensions.includes(type)) throw { status : 400, message : "Your uploaded image is not valid" };
                return true
            })
    ]
}

module.exports = {
    imageValidator
}