const path=require('path');

// path 
console.log(path.sep);

const filePath=path.join('./content','subfoler','test.txt');
console.log('file path is: ' +filePath)

//extraing the end of the path 
const basePath=path.basename(filePath);
console.log('base path is: ' +basePath);


// absoulte path or resolved path 
//__dir points to where the app.js located or current file located
const absoultePath=path.resolve(__dirname,'content','subfolder','test.txt');
console.log('abosulte path is: ' +absoultePath)
