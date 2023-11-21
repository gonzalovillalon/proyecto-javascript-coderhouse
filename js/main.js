alert("Bienvenido a Dejavu Vinos y Destilados" )
alert("A continuaciòn ingrese sus datos personales")
const Usuario=function(nombre,apellido,edad){
  this.nombre=nombre,
  this.apellido=apellido,
  this.edad=edad;
}

function PrimerUsuario() {
  let usuario1=new Usuario( prompt("Ingrese su Nombre").toLowerCase(),prompt("Ingrese su apellido").toLowerCase(),parseInt(prompt("Ingrese su edad")))
  if (usuario1.nombre ==null || usuario1.apellido ==null || isNaN(usuario1.edad)) {
    alert("Te has olvidado de ingresar tus datos,reinicia la pagina para volver a ingresar los datos")}
    
    else{
      alert("Invitando a dos amigos accedes a maravillosas promos!!")
      Confirmacion()
    }
  }
  PrimerUsuario() 
  
  

function Confirmacion() {
  let usuarios=[]
  let valor= confirm("¿Tienes dos amigos para ingresar a las promos ?");
    if (valor=== true) {
      alert("A continuaciòn ingrese los datos de tus amigos invitados")
      let usuario2=new Usuario( prompt("Ingrese su Nombre").toLowerCase(),prompt("Ingrese su apellido").toLowerCase(),parseInt(prompt("Ingrese su edad")))
      let usuario3=new Usuario( prompt("Ingrese su Nombre").toLowerCase(),prompt("Ingrese su apellido").toLowerCase(),parseInt(prompt("Ingrese su edad")))
     usuarios.push(usuario2,usuario3);
     let acceso= usuarios.filter(usuario=> (usuario.edad >=18 ) );
     
   if (acceso.length>1) {
      alert("Acceso Confirmado")
      
    }else{
      alert("No cumples con los requisitos de edad de tus invitados,vuelve a intentarlo para poder accesder a las promos")
    }
}
}