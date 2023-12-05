
//CREACION DE OBJETO DE LAS CARTAS 
const Cartas = function (nombre, imagen, descripcion, precio) {
  this.nombre = nombre;
  this.imagen = imagen;
  this.descripcion = descripcion;
  this.precio = precio;

}
const whiskys = [
  new Cartas("Jim Beam", "/assets/image/foto.png.jpg", " Jim Beam es una marca norteamericana de whisky de Bourbon producida en Clermont, Kentucky. Fue una de las marcas más vendidas durante el año 2008.", 48.000),
  new Cartas("Blue Label", "/assets/image/bluelabel.jpg", ">Johnnie Walker Blue Label es una obra maestra inigualable. Es una mezcla exquisita hecha con algunos de los whiskies más raros y excepcionales de Escocia.", 100.000),
  new Cartas("Johnnier Walker", "/assets/image/johnnierwalker.jpg", "Johnnie Walker 18 Años es una combinación suave y completa de hasta 18 whiskies diferentes de toda Escocia", 120.000)
]

console.log(whiskys)

//iMPRIMIR CARTAS
const contenedor = document.getElementById("cards")
if (contenedor) { 
  function ImpresionYCarrito(){

    whiskys.forEach((whiskys=> {
      let cardd = document.createElement("div")
          cardd.innerHTML = `
            
            <div class="card" id="contenedorCards"style="width: 18rem;">
              <img src="${whiskys.imagen}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 id="nombreProducto"class="card-title">${whiskys.nombre}</h5>
                <p class="card-text">${whiskys.descripcion}</p>
                <div>
                <p id="precioProducto"class="card-text">${whiskys.precio}</p>
                <div class="col-12">
                <button type="submit" id="añadirCarrito"class="btn btn-primary">añadir al carrito</button>
              </div>
                
                <input type="number"placeholder="Cantidad" id="cantidad" name="tentacles"  />
      
                </div>
              </div>
            </div>`
      
          contenedor.appendChild(cardd)
          let botonAñadirCarrito=document.getElementById("añadirCarrito")
          
          botonAñadirCarrito.addEventListener("click",e=>{
            let cantidad=document.getElementById("cantidad")
            console.log([cantidad])
          
            e.preventDefault()
          
              let objetoNuevo={
                nombre:whiskys.nombre,
                precio:whiskys.precio,
              }
              objetoNuevo.cantidad= cantidad
              
            console.log(objetoNuevo)
            
          });
        
          
    })
        )
      }
     

      ImpresionYCarrito()
  }
  


let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido");
let edad = document.getElementById("edad");
let email = document.getElementById("mail");
let contraseña = document.getElementById("contraseña");
let direccion = document.getElementById("direccion");
let tipoDireccion = document.getElementById("tipoDireccion");
let ciudad = document.getElementById("ciudad");
let telefono = document.getElementById("telefono");


//objeto contructor
function Ingreso(nombre, apellido, edad, email, direccion, tipoDireccion, ciudad, telefono) {
  this.nombre = nombre
  this.apellido = apellido
  this.edad = edad
  this.email = email
  this.direccion = direccion
  this.tipoDireccion = tipoDireccion
  this.ciudad = ciudad
  this.telefono = telefono
}




//nombre de usuario ingresado
let usuario = document.getElementById("nombreUsuario");


//Boton
let enviar = document.getElementById("enviar");

let formulario = document.getElementById("formulario");

if (formulario) {
  enviar.addEventListener("click", e => {
    e.preventDefault();
    let valorNombre = nombre.value;
    let valorApellido = apellido.value;
    usuario.innerText = valorNombre + " " + valorApellido;
    usuario.classList.add("text-light");
    let valorEdad = edad.value;
    let valorEmail = email.value;
    let valorDireccion = direccion.value;
    let valorTipoDireccion = tipoDireccion.value;
    let valorCiudad = ciudad.value;
    let valorTelefono = telefono.value;
    const datos = new Ingreso(valorNombre, valorApellido, valorEdad, valorEmail, valorDireccion, valorTipoDireccion, valorCiudad, valorTelefono);
    console.log(datos);

    localStorage.setItem("usuarioIngresado", JSON.stringify(datos));

  })
}

window.onload = function () {
  let valorGuardado = localStorage.getItem("usuarioIngresado")
  if (valorGuardado) {
    let objetoGuardado = JSON.parse(valorGuardado)
    usuario.innerHTML = `${objetoGuardado.nombre}  ${objetoGuardado.apellido}`
    usuario.classList.add("text-light");
  }
}


//Funcion cerrar sesion (eliminacion de LocalStorage)
let cerrarSesion = document.getElementById("cerra-sesion")
cerrarSesion.addEventListener("click", Eliminar)
function Eliminar() {
  localStorage.removeItem("usuarioIngresado")
  location.href = "/index.html"
}



