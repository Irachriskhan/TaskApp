const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const task = require("./routes/task");
const connectDB = require("./db/connect");
require("dotenv").config(); // npm install dotenv
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// json middleware
app.use(express.json());
app.use(express.static("./public"));

// routes
app.use("/api/v1/task", task);

app.use(notFound);
app.use(errorHandlerMiddleware);
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

// app.get('/api/v1/task', getAllTask);         // get All tasks
// app.post('/api/v1/task/:id', createTask);   // create one task
// app.get('/api/v1/task/:id', getTask);       // get one task
// app.patch('/api/v1/task/:id', updateTask);  // update one task
// app.delete('/api/v1/task/:id', deleteTask); // delete one task

// app.listen(port, () => {
//   console.log(`"Task Manager App running on port ${port}!"`);
// });

//public/postman => app(umutima) => route => controller => model
//                  app =>  db => atlas/database

// localhost:port = app.js
// 127.0.0.1:port = app.js
