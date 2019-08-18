var divElement = document.getElementById('div');
var buttonElement = document.querySelector('button#buttonSquare');

buttonElement.onclick = function () {
    var newSquareElement = document.createElement('div');
    newSquareElement.style.width = '100px';
    newSquareElement.style.height = '100px';
    newSquareElement.style.backgroundColor = 'red';
    divElement.appendChild(newSquareElement);
}