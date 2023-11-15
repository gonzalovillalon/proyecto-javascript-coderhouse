alert("Bienvenido a Dejavu Vinos y Destilados" )
alert("A continuaciòn ingrese sus datos personales")
let usuarios=[]

let usuario1={
  nombre: prompt("Ingrese su Nombre"),
  apellido: prompt("Ingrese su apellido"),
  edad: parseInt(prompt("Ingrese su edad")),
}
alert("Invitando a dos amigos accedes a maravillosas promos!!")

function Confirmacion() {
  let valor= confirm("¿Tienes dos amigos para ingresar a las promos ?");
  if (valor=== true) {
    alert("A continuaciòn ingrese los datos de tus amigos invitados")
    
      let usuario2={
        nombre: prompt("Ingrese su Nombre"),
        apellido: prompt("Ingrese su apellido"),
        edad: parseInt(prompt("Ingrese su edad")),
      }
      let usuario3={
        nombre: prompt("Ingrese su Nombre"),
        apellido: prompt("Ingrese su apellido"),
        edad: parseInt(prompt("Ingrese su edad")),
      }
      usuarios.push(usuario1,usuario2,usuario3)
  }else{
    alert("No podras acceder a las promos !")
  }
}
Confirmacion()

function Registro() {
  let acceso= usuarios.filter(usuario=> (usuario.edad >=18 ) );
  console.table(acceso)
}
Registro() 

