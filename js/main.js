alert ("Hola, ¿Estás por salir de casa? No olvides de chequear el tiempo!")

let temperatura = parseInt(prompt("Ingresa la temperatura actual"));
if (temperatura <= 10) {
    alert("¡Hace mucho frio! LLeva campera")
} else if (temperatura <= 18) {
    alert("Está frezco, con un abrigo ligero vas a estar bien ")
} else {
    alert("Está calido, hermoso día !")
}

let productos = prompt("Ingresa los articulos que debes comprar");
while (productos != "salir"){
    console.log(productos);
    productos = prompt("Ingresa otro producto de lo contrario escribí salir");
}
