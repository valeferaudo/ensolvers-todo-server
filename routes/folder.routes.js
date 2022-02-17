const express = require('express');
const router = express.Router();
const folderCtrl = require('../controllers/folder.controller');

router.get('/', folderCtrl.getAll);
router.get('/:id', folderCtrl.getOne);
router.delete('/:id', folderCtrl.delete);
router.post('/', folderCtrl.create);
router.put('/:id', folderCtrl.update);


module.exports = router;