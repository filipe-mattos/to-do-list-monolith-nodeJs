const Task = require("../models/Task");

module.exports = class TaskController {
  static async createTask(req, res) {
    res.render('task/create');
  }

  static async createTaskSave(req, res) {
    const task = {
      title: req.body.title,
      description: req.body.description,
      done: false,
    }

    await Task.create(task)
    res.redirect('/tasks');
  }

  static async showTasks(req, res) {
    const tasks = await Task.findAll({raw: true})

    res.render('task/all', {tasks});
  }

  static async deleteTask(req, res) {
    const id = req.body.id;
    await Task.destroy({where: {id: id}})
    res.redirect('/tasks');
  }

  static async editTask(req, res){
    const id = req.params.id;
    const task = await Task.findOne({raw: true, where: {id: id}})
    res.render('task/edit', {task})
  }

  static async editTaskPost(req, res){
    const id = req.body.id;
    const task = {
      title: req.body.title,
      description: req.body.description,
    }
   await Task.update(task, {where: {id: id}})
    res.redirect('/tasks')
  }

  static async toggleTaskStatus(req, res) {
    const id = req.body.id;
    const task = {
      done: req.body.done === 'false',
    }
    console.log(task)
    await Task.update(task, {where: {id:id}})
    res.redirect('/tasks');
  }

}