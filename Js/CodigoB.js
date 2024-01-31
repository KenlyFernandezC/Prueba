var nombre = "Kenly Fernandez "
function saludar (){
    alert ("Hola " + nombre )
}
//Window.onload se ejecuta al final de la carga de la página en el navegador
window.onload = saludar
var Edad
Edad=prompt ("Escribe tu edad")

if (Edad > 18) {
    alert ("Eres mayor de edad 🧔")
} else {
    alert ("Eres menor de edad 🧒")
}
console.log("Números del 1 al 5:");
var i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}