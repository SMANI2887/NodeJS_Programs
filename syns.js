const fs = require('fs');

fs.readFile('E:/MANI/Project/Zen_class/NodeJS/Practice/test.txt','utf8',(err, data) => {
    if(err){
        console.error(err);
    }
    console.log(data);
})