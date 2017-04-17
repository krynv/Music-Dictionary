const api = require('./api/api.js');
const path = require('path');

var musicDirectory = process.env.music_folder;
var fileExtension = process.env.file_format; 

console.log(musicDirectory);
console.log(fileExtension);

//var barry = api.getGivenFolderContents(musicDirectory, fileExtension);
