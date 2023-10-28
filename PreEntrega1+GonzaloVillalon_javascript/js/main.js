alert("Bienvenido a Rosario Chateau" )

let usuarios=[]

let invitado1={
  nombre: prompt("Ingrese su Nombre"),
  apellido: prompt("Ingrese su apellido"),
  edad: parseInt(prompt("Ingrese su edad")),
}
alert("A continuaciòn ingrese los datos de tus amigos invitado")

let invitado2={
  nombre: prompt("Ingrese su Nombre"),
  apellido: prompt("Ingrese su apellido"),
  edad: parseInt(prompt("Ingrese su edad")),
}
let invitado3={
  nombre: prompt("Ingrese su Nombre"),
  apellido: prompt("Ingrese su apellido"),
  edad: parseInt(prompt("Ingrese su edad")),
}
usuarios.push(invitado1,invitado2,invitado3)

function PaseBoliche(){
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].edad >=18) {
      alert("El invitado " + usuarios[i].nombre +" " + usuarios[i].apellido+ " " + " puede ingresar al evento")
      
      
    }else if (usuarios[i].edad <18) {
      alert("El invitado "+ usuarios[i].nombre +" "+ usuarios[i].apellido+ " "+ " es menor de edad,no puede ingresar al evento")
      
    }
    
  }
  
  
}
PaseBoliche()
