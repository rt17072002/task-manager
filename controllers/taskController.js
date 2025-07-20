const Task = require("../models/Task");

exports.createTask = async (req, res)=>{
    const task = await Task.create(req.body);
    res.json(task);
}

exports.getTasks = async (req, res)=>{
    const tasks = await Task.find();
    res.json(tasks);
}

exports.updateTask = async (req, res)=>{
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(task);
}

exports.deleteTask = async (req, res)=>{
    const task = await Task.findByIdAndDelete(req.params.id);
    res.json(task);
}