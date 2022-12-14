const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

// let createBigGrid = function () {
//   let pageLimit = prompt('Enter a number');
//   pageLimit = Number(pageLimit) * pageLimit;
//   for (let i = 0; i < pageLimit; i++) {
//     let newDiv = document.createElement('div');
//     newDiv.classList.add('box');
//     container.appendChild(newDiv);
//   }
// };

const createBigGrid = function () {
  const userInput = Number(prompt('Enter a number'));
  const pageLimit = Math.pow(userInput, 2);
  for (let i = 0; i < pageLimit; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('box');
    container.appendChild(newDiv);
  }
  container.style.display = 'grid';
  container.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
};

createBigGrid();

const boxes = document.querySelectorAll('.box');

for (let box of boxes) {
  box.addEventListener('mouseover', function (event) {
    box.style.backgroundColor = 'grey';
  });
}
