const doctoresCookie = JSON.parse(getCookie('doctores'));
const pacientesCookie = JSON.parse(getCookie('pacientes') || "[]");
const tablaDoctores = document.getElementById("tabla-doctores");
const cuerpoTabla = tablaDoctores.querySelector("tbody");

for (let i = 0; i < doctoresCookie.length; i++) {
    const doctor = doctoresCookie[i];
    const fila = cuerpoTabla.insertRow();
    const nombreDoctor = fila.insertCell();
    nombreDoctor.textContent = doctor.nombreDoctor;
    const apellidoDoctor = fila.insertCell();
    apellidoDoctor.textContent = doctor.apellidoDoctor;
    const cedula = fila.insertCell();
    cedula.textContent = doctor.cedula;
    const especialidad = fila.insertCell();
    especialidad.textContent = doctor.especialidad;
    const consultorio = fila.insertCell();
    consultorio.textContent = doctor.consultorio;
    const correoContacto = fila.insertCell();
    correoContacto.textContent = doctor.correo;
    const telefonoDoctor = fila.insertCell();
    telefonoDoctor.textContent = doctor.telefonoDoctor;
    
    let pacientesEncontrados = pacientesCookie.filter(paciente => doctor.especialidad === paciente.especialidad);
    
    const doctorPaciente = fila.insertCell();
    if (pacientesEncontrados.length > 0) {
        doctorPaciente.innerHTML = `<ul id="pacientes"></ul>`
        const pacientes = doctorPaciente.querySelector("#pacientes")
        for (let j = 0; j < pacientesEncontrados.length; j++) {
            const pacienteEncontrado = pacientesEncontrados[j];
            pacientes.innerHTML += `<li>${pacienteEncontrado.nombrePaciente}</li>`;
        }
    } else {
        doctorPaciente.textContent = "Sin pacientes";
    }
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