//Arquivo responsavel pelas rotas do projeto
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.post('/remove', TaskController.deleteTask)
router.get('/edit/:id', TaskController.editTask)
router.post('/edit', TaskController.editTaskPost)
router.post('/updatestatus', TaskController.toggleTaskStatus)
router.get('/', TaskController.showTasks)


module.exports = router;