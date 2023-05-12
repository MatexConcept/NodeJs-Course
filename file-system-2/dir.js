
const fs = require('fs')
const path = require('path')


    //      To create Folder
if(!fs.existsSync(path.join(__dirname, 'files', 'directory'))) {
    fs.mkdir(path.join(__dirname, 'files', 'directory'), (err) => {
        if (err) throw err
        console.log('Directory created!')
    })
        
}else {
    console.log('Directory already exists!')
}

// To delete folder

if(fs.existsSync(path.join(__dirname, 'files', 'folder'))) {
    fs.rmdir(path.join(__dirname, 'files','folder'), (err) => {
        if (err) throw err;
        console.log('Directory Deleted!')
    })
}




