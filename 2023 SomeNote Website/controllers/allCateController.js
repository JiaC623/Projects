const Category = require('../models/category');
const fs = require('fs');

const cate_get = (req, res) => {
    Category.find()
      .then(result => {
        res.render('allCategories', {title: 'All-Categories', categories: result});
      })
      .catch(err => console.log(err))
    
}

const cate_create = (req, res) => {
    const category = new Category(req.body);
    category.save()
      .then(result => {
        res.redirect('/all-cates');
      })
      .catch(err => console.log(err));
}

const cate_detail = (req, res) => {
    const id = req.params.id;
    Category.findById(id)
      .then(result => {
        const [fileName, fileNumber] = loopImg(result.name);
        res.render('details', { category: result, title: result.name, fileName, fileNumber})
      })
      .catch(err => console.log(err))
}

const cate_delete = (req, res) => {
    const id = req.params.id;
    Category.findByIdAndDelete(id)
      .then(result => {
        res.json({redirect: '/all-cates'});
      })
      .catch(err => console.log(err));
}

const loopImg = (name) => {
    // name = name.replace(/\s/g,'%20');
    const fileName = fs.readdirSync('./public/imgs/'+name);
    const fileNumber = fileName.length;
    // console.log(fileName, fileNumber)
    return [fileName, fileNumber]
}

module.exports = {
    cate_get,
    cate_create,
    cate_delete,
    cate_detail
}