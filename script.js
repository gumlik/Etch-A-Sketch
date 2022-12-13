const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

let creatBigGrid = function () {
  let pageLimit = 16 * 16;
  for (let i = 0; i < pageLimit; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('box');
    container.appendChild(newDiv);
  }
};
creatBigGrid();
