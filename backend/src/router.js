/* eslint-disable linebreak-style */

const express = require('express');
const router = express.Router();

const taskController = require('./controller/taskController');
const tasksMiddleware = require('./middleware/tasksMiddleware');


router.get('/tasks', taskController.getAll);
router.post('/tasks', tasksMiddleware.validateFieldTitle, taskController.createTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.put('/tasks/:id', tasksMiddleware.validateFieldStatus, tasksMiddleware.validateFieldTitle, taskController.updateTask);

module.exports = router;
