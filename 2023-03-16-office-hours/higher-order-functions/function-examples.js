const hobbies = ['VOllEyBall', 'goLF', 'coOkIng'];

const capHobbies = hobbies.map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());

console.log(capHobbies);

console.log(hobbies.filter(item => item !== 'coOkIng'));
