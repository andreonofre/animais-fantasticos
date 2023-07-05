
const animais = document.getElementById("animais")
// console.log(animais)


const gridSection = document.getElementsByClassName('grid-section');

// console.log(gridSection[0]);


const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');

// Retorna o segundo elemento
console.log(gridSection[1]);



const linkCSS = document.querySelector('[href^="https://"]');
console.log(linkCSS.href)


const fotosAnimais = document.querySelectorAll('.animais-lista img');

console.log(fotosAnimais);




//Diferença entre HTML COLECTION E NODELIST

const gridSectionHtmlCol = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

console.log(gridSectionHtmlCol);
console.log(gridSectionNode);




//Adicionando Classe ao meu elemento HTML

const primeiraUl = document.querySelector('ul');

primeiraUl.classList.add("grid-section")

console.log(primeiraUl.innerHTML);




//FOREACH Só funciona em NOdeList

gridSectionNode.forEach((iten, index )=> {
    console.log(index)
});


//Transformando Arrey Like em ARRAY

const transformArrayGrid = Array.from(gridSectionHtmlCol);
console.log(transformArrayGrid)