var api = require('./api/api.js');
var writeFile = require('write');

var barry = api.doSomething();

// writeFile('foo.txt', 'This is content to write.', function(err) {
//   if (err) console.log(err);
// });