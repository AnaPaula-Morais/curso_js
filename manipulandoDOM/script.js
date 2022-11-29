// getElementById

const element = document.getElementById('exemplo1');

console.log(element);

// getElementsByClassName

const elements = document.getElementsByClassName('classname');

console.log(elements);

// getElementsByTagName

const elements2 = document.getElementsByTagName('head');

console.log(elements2);

// querySelector

const elements3 = document.querySelector('[src]');

console.log(elements3);

// querySelectorAll

const elements4 = document.querySelectorAll('.classname');

console.log(elements4);

// manipulando conteúdos

// textContent
element.textContent += ' Olá mundo!';
console.log(element.textContent);

// innerText

element.innerText = 'Texto';

console.log(element.innerText);

 // innerHTML

element.innerHTML = '<b>Texto</b>';

console.log(element.innerHTML);






