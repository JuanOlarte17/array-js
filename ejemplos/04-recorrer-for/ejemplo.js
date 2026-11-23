// Muestra el texto en la consola y en la página.
function mostrar(...datos) {
    console.log(...datos);
    document.getElementById("salida").textContent +=
        datos.map(d => typeof d === "object" ? JSON.stringify(d) : d).join(" ") + "\n";
}

let animales = ["Perro", "Gato", "Conejo"];

for (let i = 0; i < animales.length; i++) {
    mostrar(animales[i]);
}
