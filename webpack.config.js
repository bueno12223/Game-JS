const path = require("path")
module.exports = {
    entry: {
        home: path.resolve(__dirname, "src", "js", "index.js"),
        ppt: path.resolve(__dirname, "src", "js", "ppt.js"),
        simonDice: path.resolve(__dirname, "src", "js", "simon-dice.js")

    },
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "dist-[name].js"
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        open: true
    }
   


}