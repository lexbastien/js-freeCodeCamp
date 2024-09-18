const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTarea = document.getElementById('lista-de-tareas');

function agregarTarea() {
    if (input.value) {
        // crear tarea
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');
        tareaNueva.addEventListener('click', completarTarea)

        // texto ingresado por el usuario
        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);

        // crear y agregar contenedor de iconos
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        // Iconos y dentro de ese div de iconos
        let completar = document.createElement('i');
        completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
        eliminar.addEventListener('click', elminarTarea);

        iconos.append(completar, eliminar);

        // agregar tarea a la lista
        listaDeTarea.appendChild(tareaNueva)
    } else {
        alert('Por favor, ingresa una tarea.')
    }
}

// objeto de evento, y vamos a dos padres NODOS arriba
function completarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');
}

function elminarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}

boton.addEventListener('click', agregarTarea);

// configurar con ENTER en el input, lo agrega como terea
input.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        agregarTarea();
    }
} )