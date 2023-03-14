const { Router} = require('express');
const { createTask, getTaskWithUser, updateTask } = require('../controllers/task.controllers')
const router = Router();


router.post('/api/v1/tasks', createTask);

router.get('/api/v1/tasks/:userId', getTaskWithUser);

router.put('/api/v1/tasks/:taskId', updateTask);

// router.delete('/api/v1/tasks/:taskid', );





module.exports = router;