

let iconoUsuario = document.getElementById("usuario");
iconoUsuario.addEventListener("click", Redirecciones)

function Redirecciones() {
  location.href = "/html/registrate.html";
}
let formulario = document.getElementById("formulario");
console.log([formulario]);
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



window.onload = function() {
let valorGuardado= localStorage.getItem("usuarioIngresado")
if (valorGuardado){
  let objetoGuardado=JSON.parse(valorGuardado)
 usuario.innerText= `${objetoGuardado.nombre}  ${objetoGuardado.apellido}`
 usuario.classList.add("text-light");
}}

//nombre de usuario ingresado
let usuario = document.getElementById("nombreUsuario");


//Boton
let enviar = document.getElementById("enviar");


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
  console.log(valorCiudad);
  let valorTelefono = telefono.value;

  const datos = new Ingreso(valorNombre, valorApellido, valorEdad, valorEmail, valorDireccion, valorTipoDireccion, valorCiudad, valorTelefono);
  console.log(datos);

localStorage.setItem("usuarioIngresado",JSON.stringify(datos));

})

