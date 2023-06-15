const pacientesCookie = JSON.parse(getCookie('pacientes'));
const doctoresCookie = JSON.parse(getCookie('doctores') || "[]");
const tablaPacientes = document.getElementById("tabla-pacientes");
const cuerpoTabla = tablaPacientes.querySelector("tbody");

for (let i = 0; i < pacientesCookie.length; i++) {
    const paciente = pacientesCookie[i];
    const fila = cuerpoTabla.insertRow();
    const celdaNombrePaciente = fila.insertCell();
    const celdaApellidoPaciente = fila.insertCell();
    const celdaCedulaPaciente = fila.insertCell();
    const celdaEdadPaciente = fila.insertCell();
    const celdaTelefonoPaciente = fila.insertCell();
    const celdaEspecialidad = fila.insertCell();
    celdaNombrePaciente.textContent = paciente.nombrePaciente;
    celdaApellidoPaciente.textContent = paciente.apellidoPaciente;
    celdaCedulaPaciente .textContent = paciente.cedulaPaciente;
    celdaEdadPaciente.textContent = paciente.edadPaciente;
    celdaTelefonoPaciente.textContent = paciente.telefonoPaciente;
    celdaEspecialidad.textContent = paciente.especialidad;
    
    const doctorEspecialidad = doctoresCookie.find(doctor => doctor.especialidad === paciente.especialidad);
    const celdaDoctorPaciente = fila.insertCell();
    celdaDoctorPaciente.textContent = doctorEspecialidad ? doctorEspecialidad.nombreDoctor : "Por asignar";
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