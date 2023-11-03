const Task = require("../models/task.js");

const getAllTask = async (req, res) => {
  // res.send(" All Tasks are here!");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.$where.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
  // res.send("Task created ...!");
  // res.json(req.body);
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

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://irachriskhan:<password>@cluster0.rqhehvu.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
