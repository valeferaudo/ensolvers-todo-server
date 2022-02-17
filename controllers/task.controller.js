const { request , response } = require('express');
const taskCtrl = {};
const { Task } = require('../database/config');
const { Folder } = require('../database/config');

taskCtrl.getAll = async (req = request, res = response) => {
    try {
        const tasks = await Task.findAll({
            include: {
                model: Folder,
            }
        });
        res.json({
            ok: true,
            data: tasks
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `Error: ${err}` });
    }
}
taskCtrl.getOne = async (req = request, res = response) => {
    try {
        const task = await Task.findOne({
            where: {
                id: req.params.id
            },
            include: {
                model: Folder,
            }
        });
        res.json({
            ok: true,
            data: task
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `Error: ${err}` });
    }
}
taskCtrl.delete = async (req = request, res = response) => {
    try {
        await Task.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            ok: true,
            msg:'Task deleted'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `Error: ${err}` });
    }
}
taskCtrl.create = async (req = request, res = response) => {
    try {
        const task = await Task.create(req.body);
        res.json({
            ok: true,
            data: task,
            msg:'Task created'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `Error: ${error}` });
    }
}
taskCtrl.update = async (req = request, res = response) => {
    try {
        console.log(req.params.id)
        console.log({description: req.body.description, completed: req.body.completed, FolderId: req.body.FolderId});
        const task = await Task.update(
            {id:req.params.id, description: req.body.description, completed: req.body.completed, FolderId: req.body.FolderId},
            {where: {id: req.params.id}}
        );
        res.json({
            ok: true,
            msg:'Task updated'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `Error: ${error}` });
    }
}
taskCtrl.getByFolder = async (req = request, res = response) => {
    try {
        console.log('aa',req.params.id)
        const tasks = await Task.findAll({
            where: {
                FolderId: req.params.id
            },
            include: {
                model: Folder,
            }
        });
        res.json({
            ok: true,
            data: tasks
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `Error: ${err}` });
    }
}
module.exports = taskCtrl;