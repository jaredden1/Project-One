console.log('js:loaded');




/*-------------- constants ---------------*/

const width = 28;

// Initial maze layout array.
// path = 0
// wall = 1
// start = 2
// end = 3

const gridLayout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    2,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,
    1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,
    1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,
    1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,
    1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,
    1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,
    1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,
    1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,
    1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,
    1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,
    1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,
    1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,
    1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,
    1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,
    1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,
    1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,
    1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,
    1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,
    1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,
    1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,
    1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,
    1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,
    1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,3,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

const cells = []




/*----------- state variables ------------*/


/*----------- cached elements ------------*/

const mazeGrid = document.querySelector('.maze-grid');



/*----------- event listeners ------------*/


/*-------------- functions ---------------*/

// creating maze layout
function createMaze() {

    for (let i = 0; i < gridLayout.length; i++) {
        const cell = document.createElement('div');
        mazeGrid.appendChild(cell);
        cells.push(cell);

        if (gridLayout[i] === 0) {
            cells[i].classList.add('path');
        } else if (gridLayout[i] === 1) {
            cells[i].classList.add('wall');
        } else if (gridLayout[i] === 2) {
            cells[i].classList.add('start');
        } else if (gridLayout[i] === 3) {
            cells[i].classList.add('end');
        } 
    }
}
createMaze();