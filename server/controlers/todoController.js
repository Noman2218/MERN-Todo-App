const Todo = require("../models/Todo");

// 🔹 GET all
exports.getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

// 🔹 POST
exports.createTodo = async (req, res) => {
  const newTodo = new Todo({ task: req.body.task });
  const savedTodo = await newTodo.save();
  res.json(savedTodo);
};

// 🔹 PUT
exports.updateTodo = async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(
    req.params.id,
    { completed: req.body.completed },
    { new: true }
  );
  res.json(updated);
};

// 🔹 DELETE
exports.deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
