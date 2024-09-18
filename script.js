
let answer; 
let container = document.querySelector('#container');
const button = document.querySelector('button');
let x;

function createBoxes() {
  
    for (let i = 0; i < answer; i++) {
        let box = document.createElement('div');
        container.appendChild(box);
        box.classList.add('box');
        box.id = 'id' + i;
       
    }
}
function updateBoxes() {
    let container = document.querySelector('#container');
    let boxes = document.querySelectorAll('.box');
    let width = container.clientWidth;
    let boxSize = ((width ) / (Math.sqrt(answer)) );
    let y = boxSize;
    console.log(width);
    console.log(y);

    boxes.forEach(box => {
        box.style.width = `${y-2}px`;
        box.style.height = `${y-2}px`;
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = randomColor();
        });
    });
    console.log(width); // First log of width
    return width; // Return width after everything is done
}

function randomColor() {
 let randomColor = Math.floor(Math.random()*16777215).toString(16);
return '#' + randomColor;}

function askForSize() {
    answer = prompt('Enter the size of the grid');
    if (answer == null || answer == '' || isNaN(answer)) {
        alert('Please enter a number');
        return askForSize(); }
    else if (answer < 1 || answer > 100) {
        alert('Please enter a number between 1 and 100');
        return askForSize();
    }else {x = answer;
        answer = answer * answer}
    return answer;
    
}

function removeBoxes() {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.remove();
    });


}

button.addEventListener('click', () => {
    removeBoxes(); 
    askForSize();
    createBoxes();
updateBoxes();});


askForSize();
createBoxes();
updateBoxes();