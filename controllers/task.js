const Task = require("../models/Task");

const getAllTask = async (req, res) => {
  try {
    const task = await Task.find({});
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
  // res.send(" All Tasks are here!");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
  // res.send("Task created ...!");
  // res.json(req.body);
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    // res.status(200).json({ id: req.params.id });
    if (!task) {
      return res.status(404).json({ msg: `No task with id = ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  // res.send("Get Task!");
  // res.json({ id: req.params.id });
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ msg: `No task with id = ${taskID}` });
    }
    res.status(200).json({ _id: taskID, data: req.body });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
  // res.send("Task updated!");
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `No task with id = ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: error });
  }
  // res.send("Task deleted!");
};

module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
