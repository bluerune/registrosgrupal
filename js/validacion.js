function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
    let controlador
    let password1 = document.getElementById("password1");
    let password2 = document.getElementById("password2");
// Funcion que llama a todas las validaciones
function validaciones(){
    let inputs = document.getElementsByTagName("input");
    let terminosAceptados = document.getElementById('terminos').checked;

    
    for (let i = 0; i < inputs.length; i++) {
        validarVacio(i);
    }

    if (controlador=0 && validarContrasenias && terminosAceptados && cantidadDecaracteres){
        showAlertSuccess();
    } else {
        showAlertError();
    }
}

//Checar que no hayan campos vacios
function validarVacio(inputs) {
    if (inputs.value = "") {
        controlador++;
    }
}

//Chechar que las contrseñas sean iguales
function validarContrasenias() {
    password1.value = password2.value;
}

function cantidadDecaracteres() {
    password1.length >= 6;
}

//Accion del boton
const valBoton = document.getElementById("regBtn");
valBoton.addEventListener("click", validaciones);