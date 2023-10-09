const express = require('express');
const cateController = require('../controllers/allCateController');

const router = express.Router();

router.get('/', cateController.cate_get);
router.get('/media/:mediaName', cateController.specific_cate_get);
router.post('/', cateController.cate_create);
router.get('/:id', cateController.cate_detail);
router.delete('/:id', cateController.cate_delete);

module.exports = router;