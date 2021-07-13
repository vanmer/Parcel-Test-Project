import './sayHello.js';
import sayHello from './sayHello.js';

import $ from 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

function addToDom(text) {
    let h3 = document.createElement('h3');
    h3.innerText = text;
    document.body.append(h3);
}

addToDom('Something added to the DOM');
sayHello('Hola, ¿qué tal?');

$(document).ready(()=>{
    $('body').html('Hello World, if you see this message Parcel Bundler and Github Hosting are working nicely!');
})