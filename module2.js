var divElement = document.getElementById('div');
var buttonElement = document.querySelector('button#buttonSquare');
var ulElement = document.querySelector('div ul');

buttonElement.onclick = function () {
    var newSquareElement = document.createElement('div');
    newSquareElement.style.width = '100px';
    newSquareElement.style.height = '100px';
    newSquareElement.style.backgroundColor = 'red';
    newSquareElement.style.border = 'thin solid white';
    newSquareElement.addEventListener('mouseover', function () {
        newSquareElement.style.backgroundColor = getRandomColor();
    });
    divElement.appendChild(newSquareElement);
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var nomes = ["Diego", "Gabriel", "Lucas"];

function createLi() {
    nomes.forEach(element => {
        var newLiElement = document.createElement('li');
        newLiElement.textContent = element;
        ulElement.appendChild(newLiElement);
    });
}
createLi(nomes);

/* Study why this dont work
ulElement.onloadeddata = function(){
    nomes.forEach(element => {
        var newLiElement = document.createElement('li');
        newLiElement.textContent = element;
        ulElement.appendChild(newLiElement);
    });
}
*/



