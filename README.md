# Music Dictionary

Allows you to list **all** of the `.fileFormat` files within a given folder. This includes subdirectories.

Make sure to have [NodeJS](https://nodejs.org/) installed

Clone repo: 

    git clone git@github.com:DEFCONone1/Music-Dictionary.git && cd Music-Dictionary

Install dependencies:

    npm i

How to use: 

    music_folder="[directoryToFolder]" file_format=[chosenFileFormat] npm start

Example:

    music_folder="C:\Users\VK\Desktop\Music" file_format=mp3 npm start

Output:

    C:\Users\VK\Desktop\Music
    mp3
    534 total files found
    mp3.txt has been made!

