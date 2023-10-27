var express = require("express")
global.app = express()
var puerto = 3000;

var bodyparser = require("body-parser")
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))


require("./routes.js")


app.use("/",express.static(__dirname + "/pagina"))    //permite conectar el backend con el fronted





app.listen(puerto, function(){
    console.log("servidor funcionando por el puerto" + puerto)
})
