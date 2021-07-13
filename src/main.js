import './sayHello.js';
import sayHello from './sayHello.js';

function addToDom(text) {
    let h3 = document.createElement('h3');
    h3.innerText = text;
    document.body.append(h3);
}

addToDom('Something added to the DOM');
sayHello('Hola, ¿qué tal?');