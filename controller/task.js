const getAllTask = (req, res) => {
  res.send(" All Tasks are here!");
};

const createTask = (req, res) => {
  // res.send("Task created ...!");
  res.json(req.body);
};

const getTask = (req, res) => {
  // res.send("Get Task!");
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("Task updated!");
};

const deleteTask = (req, res) => {
  res.send("Task deleted!");
};

module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
