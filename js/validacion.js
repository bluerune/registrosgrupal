function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

    let password1 = document.getElementById("password1");
    let password2 = document.getElementById("password2");
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let terminos = document.getElementById("terminos");
// Funcion que llama a todas las validaciones
function validaciones(){
    console.log("Validaciones")
    if (validarVacio() && validarContrasenias() && terminosChecked() && cantidadDecaracteres()){
        console.log("success");
        showAlertSuccess();
    } else {
        console.log("error");
        showAlertError();
    }
}

//Checar que no hayan campos vacios
function validarVacio() {
    console.log("validando vacios");
    if (!password1.value || !password2.value || !nombre.value || !apellido.value || !email.value) {
        console.log("hay vacios");
        return false;
    } else {
        return true;
    }
}

//Chechar que las contrseñas sean iguales
function validarContrasenias() {
    console.log("Comparando contrasenias");
    if (password1.value === password2.value){
        console.log("contrasenias iguales");
        return true;
    } else {
        console.log("contrasenias diferentes");
        return false;
    }
}

function cantidadDecaracteres() {
    console.log("Viendo caracteres de contrasenias");
    if (password1.value.length >= 6){
        console.log("la contrasenia tiene 6 caracteres")
        return true;
    } else {
        console.log("la contrasenia es muy corta")
        return false;
    }
}

function terminosChecked() {
    if(terminos.checked){
        return true;
    } else {
        return false;
    }
    
}

//Accion del boton
const valBoton = document.getElementById("regBtn");
valBoton.addEventListener("click", validaciones);