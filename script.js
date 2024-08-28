// Selección de elementos en el DOM
const textArea = document.querySelector(".textarea-container textarea");
const mensaje = document.querySelector(".mensaje");
const botonEncriptar = document.getElementById("btn-encrypt");
const botonDesencriptar = document.getElementById("btn-decrypt");
const botonCopiar = document.getElementById("btn-copy");
const searchSection = document.querySelector(".search");
const msjDesencriptado = document.querySelector(".msj-desencriptado");

// Eventos para botones y áreas de texto
botonEncriptar.addEventListener("click", procesarTexto);
botonDesencriptar.addEventListener("click", procesarTexto);
botonCopiar.addEventListener("click", copiarTexto);
textArea.addEventListener("input", actualizarVisibilidad);
mensaje.addEventListener("input", actualizarVisibilidad);

function encriptar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function descifrar(textoEncriptado) {
    return textoEncriptado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function procesarTexto(event) {
    const textoEntrada = textArea.value;

    if (!validarTexto(textoEntrada)) {
        alert("Solo se permiten letras minúsculas y sin acentos.");
        return;
    }

    let resultado = "";

    if (event.target.id === "btn-encrypt") {
        resultado = encriptar(textoEntrada);
    } else if (event.target.id === "btn-decrypt") {
        resultado = descifrar(textoEntrada);
    }

    mensaje.value = resultado;
    actualizarVisibilidad(); // Actualiza la visibilidad después de procesar el texto
}

function copiarTexto() {
    mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

function actualizarVisibilidad() {
    if (mensaje.value.trim() !== "") {
        // Ocultar la sección de búsqueda y mostrar la sección de mensaje desencriptado
        searchSection.style.display = "none";
        msjDesencriptado.style.display = "block";
    } else {
        // Mostrar la sección de búsqueda y ocultar la sección de mensaje desencriptado
        searchSection.style.display = "block";
        msjDesencriptado.style.display = "none";
    }
}

// Establecer el estado inicial
actualizarVisibilidad();