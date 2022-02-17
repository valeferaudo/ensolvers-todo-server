const express = require('express');
const router = express.Router();
const taskCtrl = require('../controllers/task.controller');

router.get('/', taskCtrl.getAll);
router.get('/folder/:id', taskCtrl.getByFolder);
router.get('/:id', taskCtrl.getOne);
router.delete('/:id', taskCtrl.delete);
router.post('/', taskCtrl.create);
router.put('/:id', taskCtrl.update);

module.exports = router;