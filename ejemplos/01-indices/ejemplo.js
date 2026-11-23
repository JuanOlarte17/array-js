// Muestra el texto en la consola y en la página.
function mostrar(...datos) {
    console.log(...datos);
    document.getElementById("salida").textContent +=
        datos.map(d => typeof d === "object" ? JSON.stringify(d) : d).join(" ") + "\n";
}

let frutas = ["Manzana", "Pera", "Mango"];

mostrar(frutas[0]); // Manzana
mostrar(frutas[1]); // Pera
mostrar(frutas[2]); // Mango
