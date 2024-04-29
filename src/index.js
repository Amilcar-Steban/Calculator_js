import * as operations from './operations.js';

const uno = document.querySelector('#uno');
const dos = document.querySelector('#dos');
const tres = document.querySelector('#tres');
const cuatro = document.querySelector('#cuatro');
const cinco = document.querySelector('#cinco');
const seis = document.querySelector('#seis');
const siete = document.querySelector('#siete');
const ocho = document.querySelector('#ocho');
const nueve = document.querySelector('#nueve');
const cero = document.querySelector('#cero');

const clear = document.querySelector('#clear');
const label = document.querySelector('#label');
const suma = document.querySelector('#suma');
const resta = document.querySelector('#resta');
const multiplicacion = document.querySelector('#multiplicacion');
const division = document.querySelector('#division');
const equal = document.querySelector('#equal');
const point = document.querySelector('#point');


/* --------------------------------------------------- */

label.textContent = '';
var result;
/* --------------------------------------------------- */


suma.addEventListener('click', () => {
    label.textContent += '+';
} );

resta.addEventListener('click', () => {
    label.textContent += '-';
} );

multiplicacion.addEventListener('click', () => {
    label.textContent += '*';
} );
division.addEventListener('click', () => {
    label.textContent += '/';
} );
/* --------------------------------------------------- */

function calcular(operacion) {
    try {
        let resultado = eval(operacion);
        return resultado;
    } catch (error) {
        console.error("La operación proporcionada no es válida.");
    }
}

equal.addEventListener('click', () => {
    let operacion = label.textContent;
    result = calcular(operacion);
    label.textContent = result;
});

/* --------------------------------------------------- */
point.addEventListener('click', () => {
    label.textContent += '.';
});

uno.addEventListener('click', () => {
    label.textContent += '1';
});

dos.addEventListener('click', () => {
    label.textContent += '2';
});

tres.addEventListener('click', () => {
    label.textContent += '3';
});

cuatro.addEventListener('click', () => {
    label.textContent += '4';
});

cinco.addEventListener('click', () => {
    label.textContent += '5';
});

seis.addEventListener('click', () => {
    label.textContent += '6';
});

siete.addEventListener('click', () => {
    label.textContent += '7';
});

ocho.addEventListener('click', () => {
    label.textContent += '8';
});

nueve.addEventListener('click', () => {
    label.textContent += '9';
});

cero.addEventListener('click', () => {
    label.textContent += '0';
});

clear.addEventListener('click', () => {
    label.textContent = '';
});
