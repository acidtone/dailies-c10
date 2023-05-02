const body = document.querySelector('body');

// Event with named function
const moveHandler = (event) => {
  console.log('X: ', event.x);
  console.log('Y: ', event.y);
}
body.addEventListener('mousemove', moveHandler);

// Event with anonymous function
body.addEventListener('click', (event) => {
  console.log('x: ', x);
  console.log('y: ', y);
});