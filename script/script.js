let formulario = document.getElementById(`formulario`);

let listarCita = document.getElementById(`listarCita`)
let busqueda = document.getElementById(`busqueda`)
let buscar = document.getElementById(`btnBuscar`)
let citas = []

const capturarDatos = ()=>{
    let nombre = document.getElementById(`nombre`).value
    let fecha = document.getElementById(`fecha`).value
    let hora = document.getElementById(`hora`).value
    let sintomas = document.getElementById(`sintomas`).value
    let indice = citas.length

    let registro = {
        nombre,
        fecha,
        hora,
        sintomas,
        indice
    }
    citas.unshift(registro)
    localStorage.setItem(`citas`,JSON.stringify(citas))
    console.log(citas)
    getLocalStorage()
}
formulario.addEventListener(`submit`,e=>{
    e.preventDefault()
    capturarDatos()
    e.target.reset()
});

const getLocalStorage = ()=>{
    listarCita.innerHTML =``
    
    let citasLocalStorage =JSON.parse(localStorage.getItem(`citas`))

    console.log(citasLocalStorage)
    citasLocalStorage.map(cita=>{
        const{nombre,fecha,hora,sintomas} = cita;
        listarCita.innerHTML +=`
        <tr>
            <td>${nombre}</td>
            <td>${fecha}</td>
            <td>${hora}</td>
            <td>${sintomas}</td>
        </tr>
        
        `
    })

}

function Eliminar(indice){
    const encontrar = (element) => element.indice == indice;

    citas.splice(citas.findIndex(encontrar),1)

    localStorage.setItem(`citas`,JSON.stringify(citas))
    getLocalStorage()
}



buscar.addEventListener(`click`,e =>{
    e.preventDefault()
    let input = document.getElementById(`inputbuscar`).value;
    let data = JSON.parse(localStorage.getItem(`citas`))
    let filtro = data.filter (cita=> cita.nombre.toLowerCase()===input.toLowerCase())

    busqueda.innerHTML = ``

    filtro.legth === 0 ?

    busqueda.innerHTML += `
    <div style="color:white;">El nombre ${input} no existe</div>
    `
    :

    filtro?.map(cita =>{
        const {nombre,fecha,hora,sintomas,indice} = cita

        busqueda.innerHTML +=`
            <div style="color:white;">${nombre}</div>
            <div style="color:white;">${fecha}</div>
            <div style="color:white;">${hora}</div>
            <div style="color:white;">${sintomas}
                <button class="btn btn-primary" onclick="Eliminar(${indice})">Borrar</button>
            </div>
        `
    })
})



document.addEventListener(`DOMcontentloaded`,getLocalStorage);