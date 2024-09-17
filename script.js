let x = 1
let build = createBoxes()
let size = askForSize()
let button = document.querySelector('.reset')


function createBoxes() {
    let container = document.querySelector('.container')
    for (let i = 0; i < answer; i++) {
        let box = document.createElement('div')
        box.classList.add('box')
        box.id = 'id' + i
        container.appendChild(box)

    }
}

function askForSize() {
   let answer = prompt('Enter the size of the grid')
   if (answer == null || answer == '' || isNaN(answer)) {
       alert('Please enter a number')
       askForSize()
   }
}


button.addEventListener('click', () => {
    container.removeChild(box);
    askForSize();
    createBoxes();
    })
    



askForSize();
createBoxes();
