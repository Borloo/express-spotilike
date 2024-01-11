const express = require('express');
const router = express.Router();
const { initModels } = require('../models/init-models');
const {sequelize} = require("./../models");

const { Genre } = initModels(sequelize);

router.get('/', async (req, res) => {
    try {
        const genres = await Genre.findAll();
        res.json(genres);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;