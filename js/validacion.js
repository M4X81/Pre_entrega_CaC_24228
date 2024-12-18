document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();


    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const mensaje = document.getElementById("mensaje");

    const errorNombre = document.getElementById("error-nombre");
    const errorApellido = document.getElementById("error-apellido");
    const errorEmail = document.getElementById("error-email");
    const errorTelefono = document.getElementById("error-telefono");
    const errorMensaje = document.getElementById("error-mensaje");

   
    errorNombre.textContent = "";
    errorApellido.textContent = "";
    errorEmail.textContent = "";
    errorTelefono.textContent = "";
    errorMensaje.textContent = "";

    let formularioValido = true;

    if (nombre.value.trim() === "") {
        errorNombre.textContent = "El nombre es obligatorio.";
        console.log("campo vacio");
        
        formularioValido = false;
    } else if (nombre.value.trim().length < 2) {
        errorNombre.textContent = "El nombre debe tener al menos 2 caracteres.";
        formularioValido = false;
    }
    if (apellido.value.trim() === "") {
        errorApellido.textContent = "El apellido es obligatorio.";
        formularioValido = false;
        console.log("campo vacio");
    } else if (apellido.value.trim().length < 2) {
        errorApellido.textContent = "El apellido debe tener al menos 2 caracteres.";
        formularioValido = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        errorEmail.textContent = "El correo electrónico no es válido.";
        formularioValido = false;
    }
    if (!telefono.value.match(/^\d{10}$/)) {
        alert("El teléfono debe contener exactamente 10 dígitos.");
        formularioValido = false;
    }
    if (mensaje.value.trim() === "") {
        alert("El mensaje es obligatorio.");
        formularioValido = false;
    }

    if (formularioValido) {
        alert("Formulario enviado correctamente.");
        this.submit();
    }
});