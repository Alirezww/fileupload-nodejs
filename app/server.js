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

    }

    errorHandler(){

    }
}

module.exports = Application