const { render } = require('ejs');
const Blog = require('../models/blog');

const allBlogGet = (req, res) => {

    Blog.find().sort()
    .then(result => {
        res.render('allBlogs', {title: 'All Blogs', blogs: result});
    })
    .catch(err => console.log(err))

}

const blogCreatePost = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
    .then(result => {
        res.redirect('/all-blogs')
    })
    .catch(err => console.log(err))
}

const blogDetailGet = (req, res) => {
    const id = req.params.id;

    Blog.findById(id)
    .then(result => {
        res.render('blogDetail', {title: 'Blog', blog: result})
    })
    .catch(err => console.log(err))
}

const blogDelete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then(result => {
        res.json({redirect: '/all-blogs'});
    })
    .catch(err => console.log(err))
}

module.exports = {
    allBlogGet,
    blogCreatePost,
    blogDetailGet,
    blogDelete
}