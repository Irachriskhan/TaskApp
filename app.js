const express = require("express");
const app = express();
const port = 3000;
const task = require("./routes/task");
const connectDB = require("./db/connect");
require("dotenv").config(); // npm install dotenv

// json middleware
app.use(express.json());
app.use(express.static("./public"));
// routes
app.use("/api/v1/task", task);

app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`"Task Manager App running on port ${port}!"`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
// app.get('/api/v1/task', getAllTask); // get All tasks
// app.post('/api/v1/tasks/:id', createTask); // create one task
// app.get('/api/v1/tasks/:id', getTask); // get one task
// app.patch('/api/v1/tasks/:id', updateTask); // update one task
// app.delete('/api/v1/tasks/:id', deleteTask); // delete one task

// app.listen(port, () => {
//   console.log(`"Task Manager App running on port ${port}!"`);
// });
