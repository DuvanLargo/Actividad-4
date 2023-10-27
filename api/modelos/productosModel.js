var productosModel = {}

var productos = [
    {codigo:10, nombre:"pepsi", descripcion: "bebida azucarada", precio: 2500},
    {codigo:20, nombre:"cocacola", descripcion: "bebida azucarada", precio: 3000},
    {codigo:30, nombre:"postobon", descripcion: "bebida azucarada", precio: 2000},
    {codigo:40, nombre:"bigcola", descripcion: "bebida azucarada", precio: 1700},
    {codigo:50, nombre:"ponymalta", descripcion: "bebida azucarada", precio: 2000},
]



productosModel.guardar = function(post,callback){
    productos.push({codigo:post.codigo, nombre:post.nombre, descripcion:post.descripcion, precio:post.precio})
    return callback({state:true,mensaje:"se almaceno el producto correctamente"})

}

productosModel.listartodos = function(post, callback){
    return callback(productos)
}

productosModel.modificar = function(post, callback){
    var posicion = productos.findIndex((x) => x.codigo == post.codigo)

    if(posicion == -1){
        callback({state:false,mensaje:"este producto no se encuentra dentro de la base de datos"})
        
    }
    else{
        productos[posicion].descripcion = post.descripcion
        productos[posicion].nombre = post.nombre
        productos[posicion].precio = post.precio
        callback({state:true,mensaje:"se actualizo el registro"})
    }
}

productosModel.eliminar = function(post, callback){
    var posicion = productos.findIndex((x) => x.codigo == post.codigo)

    if(posicion == -1){
        callback({state:false,mensaje:"este producto no existe, no se puede eliminar"})
       
    }
    else{
        productos.splice(posicion, 1)
        callback({state:true,mensaje:"se elimino correctamente"})

    }
}

productosModel.listarporcodigo = function(post, callback){
    var posicion = productos.findIndex((x) => x.codigo == post.codigo)

    return callback(productos[posicion])
}

productosModel.existecodigo = function(post, callback){
    var posicion = productos.findIndex((x) => x.codigo == post.codigo)
    if(posicion == -1){
        return callback({existe:"no"})
    }
    else{
        return callback({existe:"si"})
    }

}


module.exports.productosModel = productosModel