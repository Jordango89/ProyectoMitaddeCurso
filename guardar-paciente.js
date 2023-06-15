const formularioPaciente = document.getElementById('registro-pacientes-form');
formularioPaciente.addEventListener('submit', (event) => {
    event.preventDefault();
    const datosPaciente = {  
        nombrePaciente: document.getElementById('paciente').value, 
        apellidoPaciente: document.getElementById('apellido').value,
        cedulaPaciente: document.getElementById('cedula').value,
        edadPaciente: document.getElementById('edad').value,
        telefonoPaciente: document.getElementById('telefono').value,
        especialidad: document.getElementById('especialidad').value,
    };
    guardarEnCookie(datosPaciente)
    const confirmacion = confirm('¿Desea ver los datos o seguir añadiendo pacientes?');
    if (confirmacion) {
        window.location.href = 'pacientes.html';
    } else {
        console.log('Continuando en el formulario');
        formularioPaciente.reset()
    }
});

function guardarEnCookie(paciente) {
    let datosPacien = getCookie("pacientes");
    if (datosPacien === "") {
        datosPacien = "[]";
    }
    
    const pacientes = JSON.parse(datosPacien);
    pacientes.push(paciente);
    const nuevoJSON = JSON.stringify(pacientes);
    setCookie("pacientes", nuevoJSON);
}

function getCookie(nombre) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === nombre) {
            return decodeURIComponent(cookie[1]);
        }
    }
    return "";
}

function setCookie(nombre, valor) {
    document.cookie = `${nombre}=${encodeURIComponent(valor)}`;
}
