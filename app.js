const api = require('./api/api.js');

var musicDirectory = process.env.music_folder;
var fileExtension = process.env.file_format; 

var run = api.getGivenFolderContents(musicDirectory, fileExtension);
