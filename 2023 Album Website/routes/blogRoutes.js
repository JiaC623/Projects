const express = require('express');
const blogController = require('../controllers/allBlogController');

const router = express.Router();

router.get('/', blogController.allBlogGet);
router.post('/', blogController.blogCreatePost);
router.get('/:id', blogController.blogDetailGet);
router.delete('/:id', blogController.blogDelete);

module.exports = router;