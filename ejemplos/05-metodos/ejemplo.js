// Muestra el texto en la consola y en la página.
function mostrar(...datos) {
    console.log(...datos);
    document.getElementById("salida").textContent +=
        datos.map(d => typeof d === "object" ? JSON.stringify(d) : d).join(" ") + "\n";
}

let nombres = ["Luis", "Marta"];
let numeros = [4, 8, 12, 16];

// push(): agrega al final
nombres.push("Ana");
mostrar("push('Ana'):", nombres);

// length: cantidad de elementos
mostrar("length:", nombres.length);

// includes(): comprueba si existe un valor exacto
mostrar("includes('Ana'):", nombres.includes("Ana"));
mostrar("includes('Pedro'):", nombres.includes("Pedro"));

// indexOf(): posición (o -1 si no existe)
mostrar("indexOf('Ana'):", nombres.indexOf("Ana"));
mostrar("indexOf('Pedro'):", nombres.indexOf("Pedro"));

// find(): primer elemento que cumple una condición
mostrar("find(n > 10):", numeros.find(n => n > 10));

// forEach(): ejecuta una función por cada elemento
nombres.forEach(function(nombre, indice) {
    mostrar("forEach ->", indice, nombre);
});

// splice(): elimina por posición (posición 1, eliminar 1 elemento)
nombres.splice(1, 1);
mostrar("splice(1, 1):", nombres);

// pop(): elimina el último elemento
nombres.pop();
mostrar("pop():", nombres);
