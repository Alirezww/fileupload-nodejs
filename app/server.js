class Application{
    #express = require("express");
    #app = this.#express()

    constructor(PORT){
        this.configApplication()
        this.createRoutes();
        this.errorHandler();
        this.createServer(PORT);
    }

    configApplication(){
        const path = require("path");

        this.#app.use(this.#express.json({  }));
        this.#app.use(this.#express.urlencoded({ extended : false }));
        this.#app.use(this.#express.static(path.join(__dirname, "..", "public")));
    }

    createServer(port){
        this.#app.listen(port, () => console.log(`server is running on port ${port}`))
    }

    createRoutes(){
        this.#app.use(require("../app/routes/index"))
    }

    errorHandler(){
        this.#app.use((req, res, next) => {
            return res.status(404).json({
                status : 404,
                success : false,
                message : "The page you're looking for has not been found!"
            })
        })

        this.#app.use((error, req, res, next) => {
            const status = error?.status || 500;
            const message = error?.message || "InternalServerErrorMessage";

            return res.status(status).json({
                status,
                success : false,
                message
            })
        })
    }
}

module.exports = Application