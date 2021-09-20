/* Validation functions */

const validateNotEmpty = (text) => {
    return !(text.trim() == "" || text.trim() == null);
}

const validateOnlyLetters = (text) => {
    let reg = /^[a-zA-Z]+/;
    return reg.test(text);
}

const validateDateFormat = (date) => {
    let reg = /^(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])-(19|20)\d{2}$/;
    return reg.test(date);
}

const validateEmail = (email) => {
    let reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reg.test(email);
}

/* Form fields*/

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const fechaNacimiento = document.getElementById("fecha-nacimiento");
const sexo = document.getElementById("sexo");
const valoracion = document.getElementById("valoracion");
const email = document.getElementById("mail");
const comentario = document.getElementById("comentario");

const invalidNombre = document.getElementById("invalid-nombre");
const invalidApellido = document.getElementById("invalid-apellido");
const invalidFechaNacimiento = document.getElementById("invalid-fecha-nacimiento");
const invalidEmail = document.getElementById("invalid-mail");

/* Add validations to fields */

// Obligatorio y sólo letras
nombre.addEventListener("input", (e) => {
    let userInput = e.target.value;

    let isValid = validateNotEmpty(userInput) && validateOnlyLetters(userInput);
    if (isValid) {
        invalidNombre.classList.add("invisible");
        nombre.classList.remove("input-invalid");
    } else {
        invalidNombre.classList.remove("invisible");
        nombre.classList.add("input-invalid");
    }
});

// Obligatorio y sólo letras
apellido.addEventListener("input", (e) => {
    let userInput = e.target.value;

    let isValid = validateNotEmpty(userInput) && validateOnlyLetters(userInput);
    if (isValid) {
        invalidApellido.classList.add("invisible");
        apellido.classList.remove("input-invalid");
    } else {
        invalidApellido.classList.remove("invisible");
        apellido.classList.add("input-invalid");
    }
});

// Obligatorio y con formato dd-mm-aaaa
fechaNacimiento.addEventListener("input", (e) => {
    let userInput = e.target.value;

    let isValid = validateNotEmpty(userInput) && validateDateFormat(userInput);
    if (isValid) {
        invalidFechaNacimiento.classList.add("invisible");
        fechaNacimiento.classList.remove("input-invalid");
    } else {
        invalidFechaNacimiento.classList.remove("invisible");
        fechaNacimiento.classList.add("input-invalid");
    }
});

// Obligatorio y con el formato adecuado, por ejemplo: 'example@gmail.com'
email.addEventListener("input", (e) => {
    let userInput = e.target.value;

    let isValid = validateNotEmpty(userInput) && validateEmail(userInput);
    if (isValid) {
        invalidEmail.classList.add("invisible");
        email.classList.remove("input-invalid");
    } else {
        invalidEmail.classList.remove("invisible");
        email.classList.add("input-invalid");
    }
});

//Alertas
let btnEnviar = document.getElementById("button-send");
btnEnviar.addEventListener("click", enviar);


function enviar(sel){
    alert("Nombre: "+ nombre.value+ "\n" +
    "Apellido: "+ apellido.value + "\n"+
    "Fecha de nacimiento: "+ fechaNacimiento.value + "\n"+
    "Sexo: " + sexo.options[sexo.selectedIndex].text + "\n"+
    "Valoración: "+ valoracion.options[valoracion.selectedIndex].text + "\n"+
    "Email: "+email.value + "\n"+
    "Comentario: "+comentario.value);
}

// Restablecer valores
let btnRestart = document.getElementById("btn-restablecer");
btnRestart.addEventListener("click", restablecer);

function restablecer(){
    const nombre = document.getElementById("nombre").value = "";
    const apellido = document.getElementById("apellido").value= "";;
    const fechaNacimiento = document.getElementById("fecha-nacimiento").value = "";
    const sexo = document.getElementById("sexo").value = "";
    const valoracion = document.getElementById("valoracion").value= "";
    const email = document.getElementById("mail").value = "";
    const comentario = document.getElementById("comentario").value= "";
}

// Cancelar
const open = document.getElementById("btn-cancelar");
const modal_container = document.getElementById("modal_conteiner");
const btnNo = document.getElementById("btn-no");
const btnPaginaAnterior = document.getElementById("btn-paginaAnterior");

open.addEventListener('click', () =>{
    modal_container.classList.add('show');
});

btnNo.addEventListener('click', () =>{
    modal_container.classList.remove('show');
});

btnPaginaAnterior.addEventListener('click', () => {
    window.history.back();
})