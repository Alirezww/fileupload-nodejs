const path = require("path");
const { createDirectoryUploadPath } = require("../../modules/functions")

const uploadFile = (req, res, next) => {
    try{
        const image = req.files.image
        const type = path.extname(image.name);

        const image_path = path.join(createDirectoryUploadPath(), (Date.now() + type));

        req.body.image = image_path.substring(7);
        let uploadPath = path.join(__dirname, "..", "..","..", image_path);

        image.mv(uploadPath, (err) => {
            if(err) console.log(err)
            next()
        })
    }catch(err){
        next(err)
    }
}

module.exports = {
    uploadFile
}