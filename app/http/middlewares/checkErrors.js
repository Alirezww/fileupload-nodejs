const { validationResult } = require('express-validator');

const expressValidationMapper = (req, res, next) => {
    try{
        let messages = {};
        const result = validationResult(req);

        if(result?.errors?.length > 0){
            result.errors.forEach((err) => {
                messages[err.param] = err.msg
            })

            console.log(messages)

            return res.status(400).json({
                status : 400,
                success : false,
                messages
            })
        }
        next()
    }catch(err){
        next(err)
    }
}

module.exports = {
    expressValidationMapper
}