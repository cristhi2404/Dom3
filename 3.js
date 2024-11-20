const inputBusqueda = document.getElementById('termino-busqueda');
const botonBuscar = document.getElementById('buscar');
const tablaDiccionario = document.getElementById('tabla-diccionario');
const resultado = document.getElementById('resultado');

function buscar() {
    const termino = inputBusqueda.value.trim().toLowerCase(); 
    let coincidencias = 0; 

    resultado.textContent = '';

    const filas = tablaDiccionario.querySelectorAll('tbody tr');

    filas.forEach(fila => {
        const celdas = fila.querySelectorAll('td');
        let encontrada = false;

        celdas.forEach(celda => {
            if (celda.textContent.toLowerCase().includes(termino)) {
                encontrada = true;
            }
        });

        if (encontrada) {
            fila.style.display = ''; 
            coincidencias++;
        } else {
            fila.style.display = 'none'; 
        }
    });

    if (coincidencias > 0) {
        resultado.textContent = `Se encontraron ${coincidencias} coincidencias.`;
    } else {
        resultado.textContent = 'No se encontraron coincidencias.';
    }
}

botonBuscar.addEventListener('click', buscar);

inputBusqueda.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        buscar();
    }
});
