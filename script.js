console.log('script test')

const canvas = document.querySelector('div[class=canvas]')

//creating grid inside canvas div

let columnCounter = '' //counts number of columns, adds the result to grid-template-columns property

for (i = 1; i < 16 + 1; i++) {
    for (j = 1; j < 16 + 1; j++) {
        let gridDiv = document.createElement('div')

        gridDiv.className = 'canvasElement'
        canvas.appendChild(gridDiv)
    }
    columnCounter += 'auto '
}
canvas.style.gridTemplateColumns = columnCounter
console.log(columnCounter)