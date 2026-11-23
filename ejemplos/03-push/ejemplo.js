// Muestra el texto en la consola y en la página.
function mostrar(...datos) {
    console.log(...datos);
    document.getElementById("salida").textContent +=
        datos.map(d => typeof d === "object" ? JSON.stringify(d) : d).join(" ") + "\n";
}

let colores = ["Azul", "Rojo"];
colores.push("Verde");

mostrar(colores);
// ["Azul", "Rojo", "Verde"]
