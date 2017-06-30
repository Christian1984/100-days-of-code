console.log('Log from /imports/utils.js');

export let greetUser = function () {
  return 'Hello User!';
};

export let getFirstName = function (name) {
  var nameParts = name.split(' ');
  //console.log(nameParts.length);
  return nameParts[0];
};
