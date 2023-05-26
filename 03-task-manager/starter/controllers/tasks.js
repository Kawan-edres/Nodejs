const Task = require("../model/Task");
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(201).json({ tasks });
  } catch (error) {}
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      return res.status(404).json({ msg: `id is not found ${taskId}` });
    }
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateTask = async(req, res) => {
  try {
    const {id:taskId}=req.params;
    const {body}=req;
    const task =await Task.findByIdAndUpdate({_id:taskId},body,{
        new:true,
        runValidators:true
    })
    if (!task) {
        return res.status(404).json({ msg: `id is not found ${taskId}` });
      }    
      res.status(201).json({ task });

  } catch (error) {
    res.status(500).json({ msg: error });

    
  }
};
const deleteTask = async (req, res) => {
  try {
    const {id:taskId}=req.params;
    const task=Task.findOneAndDelete(({_id:taskId}))
     if(!task){
        return res.status(404).json(`no task with id:${taskId}`)
     }
     res.status(201).json(task)

  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
