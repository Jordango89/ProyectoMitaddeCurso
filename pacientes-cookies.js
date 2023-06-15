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
    
    const doctorEspecialidad = doctorCookie.find(doctor => doctor.especialidad === paciente.especialidad);
    const celdaDoctorPaciente = fila.insertCell();
    celdaDoctorPaciente.textContent = doctorEspecialidad ? doctorEspecialidad.nombreDoctor : "Por asignar";
}




// Función para obtener los datos de la cookie
function getCookie(nombre) {
    //separa todas las cookies que se tengan
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        //busca la cookie que necesitemos en este caso la cookie llamada mascota
        if (cookie[0] === nombre) {
            //si encuentra la cookie devuelve la informacion desencriptada (en formato JSON)
            return decodeURIComponent(cookie[1]);
        }
    }
    //si no encuentra ninguna cookie devuelve vacio
    return "";
}