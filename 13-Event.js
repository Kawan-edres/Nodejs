const EventEmitter=require('events');
const customEmitter=new EventEmitter();

customEmitter.on("response",(name,id)=>{
  console.log(` id :${id} , name :${name}`)

})
customEmitter.on("response",()=>{
  console.log("hello again")

})
 
customEmitter.emit('response','john',34);

