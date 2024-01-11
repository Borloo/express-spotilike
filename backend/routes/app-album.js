const express = require('express');
const router = express.Router();
const {initModels} = require('../models/init-models');
const {sequelize} = require("./../models");
const ModelService = require('./../services/ModelService');

const {Album} = initModels(sequelize);
const modelService = new ModelService();

router.get('/', async (req, res) => {
    try {
        const albums = await Album.findAll(modelService.get_album_model());
        res.status(201).json(albums);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

router.get('/:id', async (req, res) => {
    const album_id = req.params.id;
    try {
        const album = await Album.findByPk(album_id, modelService.get_album_model());
        if (!album) {
            res.status(409).json({error: 'Unknow album id: ' + album_id});
            return;
        }
        res.status(201).json(album);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

router.get('/:id/songs', async (req, res) => {
    const album_id = req.params.id;
    try {
        const album = await Album.findByPk(album_id, modelService.get_album_model(true));
        if (!album) {
            res.status(409).json({error: 'Unknow album id: ' + album_id});
            return;
        }
        res.status(201).json(album.songs);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});



module.exports = router;