const writeFile = require('write');
const path = require('path');
const _ = require('lodash');

(() => {

    var doSomething = () => {
        console.log('something');
    }

    var getGivenFolderContents = (givenFolderDirectory, givenFileExtension) => {
        console.log(givenFolderDirectory);
        console.log(givenFileExtension); 
    }

    // writeFile('foo.txt', 'This is content to write.', function(err) {
    //   if (err) console.log(err);
    // });

    var api = {
        doSomething: doSomething,
        getGivenFolderContents: getGivenFolderContents,
    };

    module.exports = api;
})();