const path = require('path');
const _ = require('lodash');
const glob = require("glob");
const fs = require('fs');

(() => {

    var getGivenFolderContents = (givenFolderDirectory, givenFileExtension) => {
        console.log(givenFolderDirectory);
        console.log(givenFileExtension); 
        var file = fs.createWriteStream(`${givenFileExtension}.txt`);

        var getDirectories = function (src, callback) {
            glob(src + '/**/*.' + givenFileExtension, callback);
        };

        getDirectories(givenFolderDirectory, function (err, res) {
            if (err) {
                console.log('Error', err);
            } else {
                // console.log(res);
                console.log(`${res.length} total files found`);

                _.each(res, (individualTrack) => {
                    var baseName = path.basename(individualTrack);
                    
                    file.write(`${baseName}\n`); 
                });

                file.end();
                console.log(`${givenFileExtension}.txt has been made!`)
            }
        });
    }

    var api = {
        getGivenFolderContents: getGivenFolderContents,
    };

    module.exports = api;
})();