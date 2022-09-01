const router = require("express").Router();

router.get("", (req, res, next) => {
    return res.json({
        message : "The home page"
    })
})

module.exports = router