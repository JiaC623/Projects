const express = require('express');
const indexController = require('../controllers/allCateController');

const router = express.Router();

router.get('/', indexController.index_get);
// router.get('/:id', indexController.index_get);

module.exports = router;
