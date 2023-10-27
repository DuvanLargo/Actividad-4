var productosController = require("./api/controlador/productosController.js").productosController


//api POST create
app.post("/productos/guardar",function(request, response){
    productosController.guardar(request, response)
})
//read
app.post("/productos/listartodos", function(request, response){  
    productosController.listartodos(request, response)  
})
//uddate
app.post("/productos/modificar", function(request, response){
    productosController.modificar(request, response)
})
//detele
app.post("/productos/eliminar", function(request, response){
    productosController.eliminar(request, response)
})
app.post("/productos/listarporcodigo", function(request, response){  //se crea nueva api para listar solo 1 producto a modificar
    productosController.listarporcodigo(request, response)  
})
