const express = require('express');
const router = express.Router();
const { initModels } = require('../models/init-models');
const {sequelize} = require("./../models");

const { Album, Artist } = initModels(sequelize);

const model_album = {
    attributes: {
        exclude: ['artist_id']
    },
    include: [{
        model: Artist,
        as: 'artist'
    }]
}

router.get('/', async (req, res) => {
    try {
        const albums = await Album.findAll(model_album);
        res.status(201).json(albums);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;