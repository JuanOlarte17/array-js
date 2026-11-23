// Arreglo donde se guardan los números ingresados.
let listaNumeros = [];

// Referencias a los elementos del formulario y los resultados.
let formulario = document.getElementById("formulario");
let numero = document.getElementById("numero");
let lista = document.getElementById("lista");
let suma = document.getElementById("suma");
let promedio = document.getElementById("promedio");
let mayor = document.getElementById("mayor");
let menor = document.getElementById("menor");

// Agrega el número ingresado cuando se envía el formulario.
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    if (numero.value.trim() === "") {
        alert("Ingrese un número");
    } else {
        let valor = parseFloat(numero.value);

        listaNumeros.push(valor);
        numero.value = "";
        numero.focus();
        mostrarResultados();
    }
});

function mostrarResultados() {
    lista.innerHTML = "";

    // No se calcula nada si el arreglo está vacío.
    if (listaNumeros.length === 0) {
        suma.textContent = "";
        promedio.textContent = "";
        mayor.textContent = "";
        menor.textContent = "";
        return;
    }

    let total = 0;
    // Mayor y menor se inicializan con el primer elemento.
    let numMayor = listaNumeros[0];
    let numMenor = listaNumeros[0];

    for (let i = 0; i < listaNumeros.length; i++) {
        lista.innerHTML += `<li>${listaNumeros[i]}</li>`;
        total += listaNumeros[i];

        if (listaNumeros[i] > numMayor) {
            numMayor = listaNumeros[i];
        }

        if (listaNumeros[i] < numMenor) {
            numMenor = listaNumeros[i];
        }
    }

    let media = total / listaNumeros.length;

    suma.textContent = `Suma: ${total}`;
    promedio.textContent = `Promedio: ${media.toFixed(2)}`;
    mayor.textContent = `Número mayor: ${numMayor}`;
    menor.textContent = `Número menor: ${numMenor}`;
}
