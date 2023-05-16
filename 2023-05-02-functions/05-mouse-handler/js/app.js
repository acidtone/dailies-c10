const body = document.querySelector('body');

const handleClick = (event) => {
  console.log('x:', event.x);
  console.log('y:', event.y);
};
body.addEventListener('click', handleClick);


body.addEventListener('mousemove', ({ x, y }) => {
  console.log('x:', x);
  console.log('y:', y);
});