const greet = function() {
  console.log('Hi!');
};

const sendInvite = function(callback) {
  callback();
}

sendInvite(greet); // "Hi!"