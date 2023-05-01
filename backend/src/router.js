/* eslint-disable linebreak-style */

const express = require('express');
const taskController = require('./controller/taskController');

const router = express.Router();

router.get('/tasks', taskController.getAll);


module.exports = router;
