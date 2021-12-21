
const span = document.getElementById("span")
const form = document.getElementById("formulario");
let users = JSON.parse(localStorage.getItem(`Registros`))

form.addEventListener(`submit`,e =>{
    e.preventDefault()
    const correo = document.getElementById("email").value;
    const pass = document.getElementById("contrasena").value;
    const busqueda = JSON.stringify(users.find(({email})=>email === correo ));
    const busqueda2 = JSON.stringify(users.find(({contrasena})=>contrasena === pass));
    console.log(busqueda == undefined)
    console.log("Soy 2 "+busqueda2)
    if( busqueda2 !==undefined  && busqueda !== undefined ){
        irIndex();
    }
    else{
        alert("Usuario no registrado")
        span.innerHTML +=`
        <a href="registro.html">Ir a registro</a>
        `
    }
});

console.log(users)

const irIndex = ()=>{
    location.href="./index.html"
}