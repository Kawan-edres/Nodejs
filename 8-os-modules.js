const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);

//method returns  the system  uptime  in seconds

console.log(`the system up time is ${os.uptime()} seconds`);


//method to get info about OS 
const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}


console.log(currentOs)
