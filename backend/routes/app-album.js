const express = require('express');
const router = express.Router();
const {initModels} = require('../models/init-models');
const {sequelize} = require("./../models");

const {Album, Artist, Song, Gender} = initModels(sequelize);

const model_album = {
    attributes: {
        exclude: ['artist_id']
    },
    include: [
        {
            model: Song,
            as: 'songs',
            attributes: {
                exclude: ['artist_id', 'album_id', 'gender_id']
            },
            include: [
                {
                    model: Gender,
                    as: 'gender'
                }
            ]
        },
        {
            model: Artist,
            as: 'artist'
        },
    ]
}

router.get('/', async (req, res) => {
    try {
        const albums = await Album.findAll(model_album);
        res.status(201).json(albums);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

router.get('/:id', async (req, res) => {
    const album_id = req.params.id;
    try {
        const album = await Album.findByPk(album_id, model_album);
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

module.exports = router;