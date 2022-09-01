const { body } = require("express-validator");
const path = require("path");

function imageValidator(){
    return [
        body("image")
            .custom((value,{ req }) => {
                if(!req.files) throw { status : 400, message : "it is necessary that you upload a file" }

                const extensions = [".png", ".jpg", ".jpeg", ".webp", ".gif"];

                const image = req.files.image;
                const type = path.extname(image.name);

                if(image.size > 1000000) throw { status : 400, message : "Your uploaded image size should not more then 1 mg." }

                if(!extensions.includes(type)) throw { status : 400, message : "Your uploaded image is not valid" };
                return true
            })
    ]
}

module.exports = {
    imageValidator
}