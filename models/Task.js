const mongoose = require("mongoose");

// A schema is a representation of collection tasks
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: [30, "name can't go beyond 30"],
  },
  completed: {
    type: Boolean,
    default: false, // remove it if you want to use PUT method
  },
});

module.exports = mongoose.model("tasks", TaskSchema);
// specify the collection of DB
