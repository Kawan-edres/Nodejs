const getAllTasks=(req,res)=>{
    res.send("Task maneger app")
}


const createTask=(req,res)=>{
    res.send("create task")
}
const getTask=(req,res)=>{
    res.send("get single task")
}
const updateTask=(req,res)=>{
    res.send("update task")
}
const deleteTask=(req,res)=>{
    res.send("Delete task")
}


module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}