const Todo = require('../models/todo');

const todo_list_get = (req, res) => {
    Todo.find()
    .then(result => {
        res.render('allTodos', {title: 'Todo List', todos: result})
    })
    .catch(err => console.log(err))
}

const todo_create_post = (req, res) => {
    const todo = new Todo(req.body);
    todo.save()
    .then(result => {
        res.redirect('/all-todos');
    })
    .catch(err => console.log(err))
    
}

const todo_delete = (req, res) => {
    const id = req.params.id;
    Todo.findByIdAndDelete(id)
      .then(result => {
        res.json({redirect: '/all-todos'});
      })
      .catch(err => console.log(err));
}

module.exports = {
    todo_list_get,
    todo_create_post,
    todo_delete
}