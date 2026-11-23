// Muestra el texto en la consola y en la página.
function mostrar(...datos) {
    console.log(...datos);
    document.getElementById("salida").textContent +=
        datos.map(d => typeof d === "object" ? JSON.stringify(d) : d).join(" ") + "\n";
}

// Array vacío
let nombres = [];

// Array con datos
let edades = [18, 20, 25, 30];

// Array de textos
let ciudades = ["Medellín", "Cali", "Bogotá"];

mostrar("nombres:", nombres);
mostrar("edades:", edades);
mostrar("ciudades:", ciudades);
