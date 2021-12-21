const formulario = document.getElementById("formulario")

const usuarios = []

const capturarDatos = ()=>{
    
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const contrasena = document.getElementById("contrasena").value;

    const registros = {
        nombre,
        email,
        contrasena
    }
    usuarios.unshift(registros)
    localStorage.setItem(`Registros`,JSON.stringify(usuarios))
}
formulario.addEventListener(`submit`,e=>{
    e.preventDefault()
    if(nombre.length < 5){
        alert(" el nombre no es valido")
    }
    else if(contrasena.length < 5){
        alert("Contraseña demasiado corta")
    }

    capturarDatos()
    irALogin()
    e.target.reset()
});

const irALogin = ()=>{
    location.href="login.html"
}