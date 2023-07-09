const express = require('express');
const todoController = require('../controllers/allTodoController');

const router = express.Router();

router.get('/', todoController.todo_list_get);
router.post('/', todoController.todo_create_post);
router.delete('/:id', todoController.todo_delete);

module.exports = router;
