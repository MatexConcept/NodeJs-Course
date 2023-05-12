const fs = require('fs');
const path = require('path')
    // reading file (1)
    //Hard coded
// fs.readFile('./files/starte.txt','utf8', (err, data) => {
//     if(err) throw err
//     console.log(data)
//     // console.log(data,toString())
// })
    // reading file (1)
//  Soft coded
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if(err) throw err
    console.log(data)
  
})



// Writing File (soft coded)

fs.writeFile(path.join(__dirname, 'files', 'new.txt'), 'Idan wassup omo mii', (err) => {
    if(err) throw err;
    console.log('Write file completed');


    // Update File

    fs.appendFile(path.join(__dirname, 'files', 'new.txt'), '\n\n i have been updated', (err) => {
        if(err) throw err;
        console.log('File Updated Completed');


        // Rename File
        fs.rename(path.join(__dirname, 'files', 'new.txt'), path.join(__dirname, 'files', 'final.txt'), (err) => {
            if(err) throw err;
            console.log('Rename Completed'); 
        })
    })
    
});
            //  New File
fs.appendFile(path.join(__dirname, 'files', 'index.js'), `console.log('Hello')`, (err) => {
    if (err) throw err;
    console.log('Updating 2 completed')

    // Rename file
    fs.rename(path.join(__dirname, 'files', 'index.js'), path.join(__dirname, 'files', 'main.js'), (err) => {
        if(err) throw err
        console.log('Rename Successful')

        
    fs.unlink(path.join(__dirname, 'files', 'main.js'), (err) => {
    if(err) throw err
    console.log('Deleted Successful')
})

     
})

})




process.on('uncaughtException', (err) => {
    console.error(`There was an error processing the data opa mi: ${err}`);
    process.exit(1);
})