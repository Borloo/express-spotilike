const express = require('express');
const router = express.Router();
const { initModels } = require('../models/init-models');
const {sequelize} = require("./../models");

const { Artist } = initModels(sequelize);

router.get('/', async (req, res) => {
    try {
        const artists = await Artist.findAll();
        res.json(artists);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;