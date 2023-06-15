const formularioDoctor = document.getElementById('registro-doctores-form');
formularioDoctor.addEventListener('submit', (event) => {
    event.preventDefault();
    const datosDoctor = {
        nombreDoctor: document.getElementById('nombre').value,
        apellidoDoctor: document.getElementById('apellido').value,
        cedula: document.getElementById('cedula').value,
        consultorio: document.getElementById('consultorio').value,
        especialidad: document.getElementById('especialidad').value,
        correo: document.getElementById('correo').value
    };
    const doctoresCookie = getCookie('doctores') ? JSON.parse(getCookie('doctores')) : [];
    const existeDoctor = doctoresCookie.some(doctor => doctor.especialidad === datosDoctor.especialidad);
    if (existeDoctor) {
        alert("Ya existe un doctor para esta especialidad");
    } else {
        guardarEnCookie(datosDoctor);
    }
    const confirmacion = confirm('¿Desea ver los datos o seguir añadiendo doctores?');
    if (confirmacion) {
        window.location.href = 'doctores.html';
    } else {
        console.log('Continuando en el formulario');
        formularioDoctor.reset()
    }
});

function guardarEnCookie(doctor) {
    let datosDoctor = getCookie("doctores");
    if (datosDoctor === "") {
        datosDoctor = "[]";
    }
    
    const doctores = JSON.parse(datosDoctor);
    doctores.push(doctor);
    const nuevoJSON = JSON.stringify(doctores);
    setCookie("doctores", nuevoJSON);
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