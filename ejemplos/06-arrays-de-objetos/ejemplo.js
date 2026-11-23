// Muestra el texto en la consola y en la página.
function mostrar(...datos) {
    console.log(...datos);
    document.getElementById("salida").textContent +=
        datos.map(d => typeof d === "object" ? JSON.stringify(d) : d).join(" ") + "\n";
}

let productos = [
    { nombre: "Teclado", precio: 50000 },
    { nombre: "Mouse", precio: 35000 }
];

mostrar(productos[0].nombre); // Teclado
mostrar(productos[0].precio); // 50000
