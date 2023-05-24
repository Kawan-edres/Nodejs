const express=require('express');
const app=express();
const tasks=require("./router/tasks")

//middleware
app.use(express.json()); //with out this we dont have data in req.body

//routes
app.use('/api/v1/tasks',tasks) //root roter for tasks router




const port=3000;
app.listen(port,console.log(`The server is running on port ${port}...`))