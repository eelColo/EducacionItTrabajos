/*Edad validacion*/
var edad= prompt("Ingrese su edad: ");

if(edad >= 18){
    alert("Bienvenido")
} else{
    alert("¡Debes ser mayor de edad para acceder!")
    
}


/*Segundo ejercicio: Login usuario pasword*/


var frm = document.getElementById('login')
console.log(frm)
frm = addEventListener('submit', event => {
    event.stopImmediatePropagation()
    event.preventDefault()
    let forml = event.target
    console.log(frm)
    console.log(forml[1].value)
    if(forml[0].value == "admin" || forml[1].value == "1234"){
        alert("Bienvenido admin!");
    } else{
        alert("usuario o contraseña incorrecta pruebe nuevamente.")
    }
})



