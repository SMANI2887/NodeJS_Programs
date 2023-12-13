const fs = require('fs');

try{
    const data = fs.readFileSync('E:/MANI/Project/Zen_class/NodeJS/Practice/test.txt','utf8');
    console.log(data)
}catch(err){
    console.log(err)
}