const grid = document.querySelector('.grid')

//draw the block
function addBlock() {
const block = document.createElement('div')
block.classList.add('block')
block.style.left = '100px'
block.style.bottom = '50px'
grid.append(block)
}

addBlock()