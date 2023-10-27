
var guardar = function(){

    var codigo = document.getElementById("codigo").value
    var nombre = document.getElementById("nombre").value
    var descripcion = document.getElementById("descripcion").value
    var precio = document.getElementById("precio").value

    // WARNING: For POST requests, body is set to null by browsers.
    var data = `codigo=${codigo}&nombre=${nombre}&descripcion=${descripcion}&precio=${precio}`;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        var respuesta = JSON.parse(this.responseText)
        var mensajes = document.getElementById("mensajes")
          if(respuesta.state == true){
            mensajes.innerHTML += ` <div class="alert alert-success" role="alert">
                                        ${respuesta.mensaje}
                                    </div>` 
          }
          else{
            mensajes.innerHTML += ` <div class="alert alert-danger" role="alert">
                                        ${respuesta.mensaje}
                                    </div>` 
          }
          listartodos()

      }
    });

    xhr.open("POST", "http://localhost:3000/productos/guardar");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send(data);

    }

var listartodos = function(){

  // WARNING: For POST requests, body is set to null by browsers.
    var data = "";

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        var respuesta = JSON.parse(this.responseText).reverse();
        console.log(respuesta)
        var datos = document.getElementById("datos")
        datos. innerHTML=""

        for (let a = 0; a < respuesta.length; a++) {
            datos.innerHTML += `    <tr>             
                                         <td onclick="listarporcodigo(${respuesta[a].codigo})">${respuesta[a].codigo}</td>
                                         <td onclick="listarporcodigo(${respuesta[a].codigo})">${respuesta[a].nombre}</td>
                                         <td onclick="listarporcodigo(${respuesta[a].codigo})">${respuesta[a].descripcion}</td>             
                                         <td onclick="listarporcodigo(${respuesta[a].codigo})">${respuesta[a].precio}</td>
                                         <td> <button type="button" class="btn btn-danger" onclick="eliminar(${respuesta[a].codigo})">Eliminar</button></td>
                                       </tr>`
            
        }
      }
    });

   xhr.open("POST", "http://localhost:3000/productos/listartodos");

    xhr.send(data);
    
}

var eliminar = function(codigo){

  // WARNING: For POST requests, body is set to null by browsers.
    var data = "codigo=" + codigo;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        var respuesta = JSON.parse(this.responseText)

        var mensajes = document.getElementById("mensajes")
        if(respuesta.state == true){
          mensajes.innerHTML += ` <div class="alert alert-success" role="alert">
                                      ${respuesta.mensaje}
                                  </div>` 
        }
        else{
          mensajes.innerHTML += ` <div class="alert alert-danger" role="alert">
                                      ${respuesta.mensaje}
                                  </div>` 
        }

        listartodos()
      }
    });

    xhr.open("POST", "http://localhost:3000/productos/eliminar");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send(data);

}

var listarporcodigo = function(codigo){

  // WARNING: For POST requests, body is set to null by browsers.
    var data = "codigo=" + codigo;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        var respuesta = JSON.parse(this.responseText);
        console.log(respuesta)

        document.getElementById("codigo").value = respuesta.codigo
        document.getElementById("nombre").value = respuesta.nombre
        document.getElementById("descripcion").value = respuesta.descripcion
        document.getElementById("precio").value = respuesta.precio
        document.getElementById("codigo").setAttribute("disabled", true); 
     }
    });

    xhr.open("POST", "http://localhost:3000/productos/listarporcodigo");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send(data);

    document.getElementById("btnguardar").style.display = "none"
    document.getElementById("btnmodificar").style.display = "block"

}

var modificar = function(){

    var codigo = document.getElementById("codigo").value
    var nombre = document.getElementById("nombre").value
    var descripcion = document.getElementById("descripcion").value
    var precio = document.getElementById("precio").value


  // WARNING: For POST requests, body is set to null by browsers.
  var data = `codigo=${codigo}&nombre=${nombre}&descripcion=${descripcion}&precio=${precio}`;

   var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    var respuesta = JSON.parse(this.responseText);
    if(respuesta.state == true){
     mensajes.innerHTML += ` <div class="alert alert-success" role="alert">
                                 ${respuesta.mensaje}
                             </div>` 
   }
   else{
     mensajes.innerHTML += ` <div class="alert alert-danger" role="alert">
                                 ${respuesta.mensaje}
                             </div>` 
   }
   listartodos()
  }
});

xhr.open("POST", "http://localhost:3000/productos/modificar");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.send(data);

}

var nuevo = function(){
    document.getElementById("btnguardar").style.display = "block"
    document.getElementById("btnmodificar").style.display = "none"

    document.getElementById("codigo").value = ""
    document.getElementById("nombre").value = ""
    document.getElementById("descripcion").value = ""
    document.getElementById("precio").value = ""
    document.getElementById("codigo").removeAttribute("disabled");
}


nuevo()
listartodos()