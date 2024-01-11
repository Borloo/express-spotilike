const express = require('express');
const router = express.Router();
const {initModels} = require('../models/init-models');
const {sequelize} = require("./../models");
const ModelService = require('./../services/ModelService');

const {Album, Artist} = initModels(sequelize);
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

router.post('/', async (req, res) => {
    try {
        const { title, cover_image, release_date, artist_id } = req.body;
        if (!title){
            res.status(400).json({ error: 'Title required' });
            return;
        }
        if (!cover_image){
            res.status(400).json({ error: 'Cover image required' });
            return;
        }
        if (!release_date){
            res.status(400).json({ error: 'Release date required' });
            return;
        }
        if (!artist_id){
            res.status(400).json({ error: 'Artist id required' });
            return;
        }
        const artist = await Artist.findByPk(artist_id);
        if (!artist){
            res.status(409).json({error: 'Unknow artist id: ' + artist_id});
            return;
        }
        const album = await Album.create({
            title,
            cover_image,
            release_date,
            artist_id
        });
        res.status(201).json(album);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;