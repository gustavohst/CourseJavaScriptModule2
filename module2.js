var divElement = document.getElementById('div');
var buttonElement = document.querySelector('button#buttonSquare');

buttonElement.onclick = function () {
    let newSquareElement = document.createElement('div');
    newSquareElement.style.width = '100px';
    newSquareElement.style.height = '100px';
    newSquareElement.style.backgroundColor = 'red';
    newSquareElement.style.border = '1px solid white';
    newSquareElement.style.float = 'left';
    newSquareElement.onmouseover = function () {
        newSquareElement.style.backgroundColor = getRandomColor();
    };
    divElement.appendChild(newSquareElement);
}

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var nomes = ["Diego", "Gabriel", "Lucas"];

function createLi() {
    let newUlElement = document.createElement('ul');
    divElement.appendChild(newUlElement);

    nomes.forEach(element => {
        let newLiElement = document.createElement('li');
        newLiElement.textContent = element;
        divElement.appendChild(newLiElement);
    });
}
createLi(nomes);




