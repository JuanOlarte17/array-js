// Cada producto es un objeto con: nombre, precio y cantidad.
let productos = [];

let formulario = document.getElementById("formulario");
let inputProducto = document.getElementById("producto");
let inputPrecio = document.getElementById("precio");
let inputCantidad = document.getElementById("cantidad");
let tabla = document.getElementById("tabla");
let total = document.getElementById("total");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = inputProducto.value.trim();
    let precioTexto = inputPrecio.value.trim();
    let cantidadTexto = inputCantidad.value.trim();

    // Validar que ningún campo esté vacío.
    if (nombre === "" || precioTexto === "" || cantidadTexto === "") {
        alert("Complete todos los campos");
        return;
    }

    let precio = parseFloat(precioTexto);
    let cantidad = Number(cantidadTexto);

    // Validar que el precio sea un número mayor a cero.
    if (isNaN(precio) || precio <= 0) {
        alert("El precio debe ser un número mayor a cero");
        return;
    }

    // Validar que la cantidad sea un entero positivo.
    if (!Number.isInteger(cantidad) || cantidad <= 0) {
        alert("La cantidad debe ser un número entero mayor a cero");
        return;
    }

    // Agregar el producto como objeto.
    productos.push({
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    });

    mostrarProductos();

    // Limpiar los campos.
    formulario.reset();
    inputProducto.focus();
});

function mostrarProductos() {
    tabla.innerHTML = "";
    let valorTotal = 0;

    for (let i = 0; i < productos.length; i++) {
        let subtotal = productos[i].precio * productos[i].cantidad;
        valorTotal += subtotal;

        tabla.innerHTML += `
            <tr>
                <td>${productos[i].nombre}</td>
                <td>${formatear(productos[i].precio)}</td>
                <td>${productos[i].cantidad}</td>
                <td>${formatear(subtotal)}</td>
            </tr>`;
    }

    total.textContent = `Valor total del inventario: ${formatear(valorTotal)}`;
}

function formatear(valor) {
    return "$" + valor.toLocaleString("es-CO");
}

mostrarProductos();
