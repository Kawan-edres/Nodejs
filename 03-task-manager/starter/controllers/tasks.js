const Task = require("../model/Task");
const asyncWarapper = require("../middleware/async");

const getAllTasks = asyncWarapper(async (req, res) => {
  const tasks = await Task.find();
  res.status(201).json({ tasks });
});

const createTask = asyncWarapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWarapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    return res.status(404).json({ msg: `id is not found ${taskId}` });
  }
  res.status(201).json({ task });
});

const updateTask = asyncWarapper(async (req, res) => {
  const { id: taskId } = req.params;
  const { body } = req;
  const task = await Task.findByIdAndUpdate({ _id: taskId }, body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ msg: `id is not found ${taskId}` });
  }
  res.status(201).json({ task });
});

const deleteTask = asyncWarapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    return res.status(404).json(`no task with id:${taskId}`);
  }
  res.status(201).json(task);
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
