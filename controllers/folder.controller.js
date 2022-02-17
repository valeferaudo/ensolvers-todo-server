const { request , response } = require('express');
const folderCtrl = {};
const { Task } = require('../database/config');
const { Folder } = require('../database/config');

folderCtrl.getAll = async (req = request, res = response) => {
    try {
        const folders = await Folder.findAll();
        res.json({
            ok: true,
            data: folders
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `Error: ${error}` });
    }
}
folderCtrl.getOne = async (req = request, res = response) => {
    try {
        const folder = await Folder.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json({
            ok: true,
            data: folder
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `Error: ${error}` });
    }
}
folderCtrl.delete = async (req = request, res = response) => {
    try {
        await Folder.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            ok: true,
            msg:'Folder and associated tasks deleted.'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `Error: ${error}` });
    }
}
folderCtrl.create = async (req = request, res = response) => {
    try {
        const folder = await Folder.create(req.body);
        res.json({
            ok: true,
            data: folder,
            msg:'Folder created.'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `Error: ${error}` });
    }
}
folderCtrl.update = async (req = request, res = response) => {
    try {
        const folder = await Folder.update(
            {title: req.body.title},
            {where: {id: req.params.id}}
        );
        res.json({
            ok: true,
            msg:'Folder updated'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `Error: ${error}` });
    }
}
module.exports = folderCtrl;