const {readFile,writeFile, appendFile} =require('fs');


// getting the data from first 
console.log("start")

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err.message)
        return
    }
    const first=result;
    // getting the data from second 
    readFile('./content/second.txt','utf8',(err,result)=>{

        if(err){
            console.log(err.message)
            return
        }   
      const second=result;
          // append the data from second 
      writeFile(
        './content/result-async.txt',
        `${first}, ${second} \n`,
        {flag:'a'},
        (err,result)=>{
            if(err){
                console.log(err.message)
                return
            }
            console.log('done with this task');
        })

})

})


console.log("ready for next one")
