// Arreglo con ocho estudiantes (mínimo requerido).
let estudiantes = [
    "Ana Gómez",
    "Carlos Pérez",
    "María Rodríguez",
    "Juan Torres",
    "Laura Martínez",
    "Andrés López",
    "Sofía Ramírez",
    "Daniel Castro"
];

let lista = document.getElementById("lista");
let formulario = document.getElementById("formulario");
let inputBusqueda = document.getElementById("busqueda");
let resultado = document.getElementById("resultado");

// Mostrar todos los estudiantes.
for (let i = 0; i < estudiantes.length; i++) {
    lista.innerHTML += `<li>${estudiantes[i]}</li>`;
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    let texto = inputBusqueda.value.trim().toLowerCase();

    if (texto === "") {
        alert("Escriba el nombre que desea buscar");
        return;
    }

    // find() devuelve el primer estudiante cuyo nombre contiene el texto
    // (sin distinguir mayúsculas/minúsculas) o undefined si no hay ninguno.
    let encontrado = estudiantes.find(function(estudiante) {
        return estudiante.toLowerCase().includes(texto);
    });

    if (encontrado) {
        resultado.textContent = `✅ ${encontrado} está registrado(a).`;
    } else {
        resultado.textContent = `❌ No se encontró ningún estudiante con "${inputBusqueda.value.trim()}".`;
    }
});
