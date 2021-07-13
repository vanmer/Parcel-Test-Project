export default function sayHello(text) {
    let h3 = document.createElement('h3');
    h3.innerText = text;
    document.body.append(h3);
}