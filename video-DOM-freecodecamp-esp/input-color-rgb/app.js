const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

// tomamos valores iniciales que estan en HTML
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;
// actualiza texto de los P
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor(rojo, verde, azul) {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

// SE USA OBJETO DEL EVENTO (e) PARA AGARRA CUALQUIER COSA DEL HTML
// para actualizar RED
// inputRojo.addEventListener('change', (e) => {
//     rojo = e.target.value;
//     textoRojo.innerText = rojo;
//     actualizarColor(rojo, verde, azul)
// });

// para actualizar GREEN
inputVerde.addEventListener('change', (e) => {
    verde = e.target.value;
    textoVerde.innerText = rojo;
    actualizarColor(rojo, verde, azul)
});

// para actualizar BLUE
inputAzul.addEventListener('change', (e) => {
    azul = e.target.value;
    textoAzul.innerText = rojo;
    actualizarColor(rojo, verde, azul)
});

// como tenemos referencia especifica, se puede usar las variables.
inputRojo.addEventListener('change', () => {
    rojo = inputRojo.value;
    textoRojo.innerText = rojo;
    actualizarColor(rojo, verde, azul)
});