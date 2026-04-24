const { Task } = require("../models");

exports.getTasks = async (req, res) => {
  const tasks = await Task.findAll({
    where: { userId: req.user.userId },
  });
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    userId: req.user.userId,
  });
  res.json(task);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findOne({
    where: { id: req.params.id, userId: req.user.userId },
  });

  if (!task) return res.status(404).json({ msg: "Not found" });

  task.status = "COMPLETED";
  await task.save();

  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.destroy({
    where: { id: req.params.id, userId: req.user.userId },
  });

  res.json({ msg: "Deleted Successfully" });
};
