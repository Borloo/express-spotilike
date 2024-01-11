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

router.put('/:id', async (req, res) => {
    const genre_id = req.params.id;
    try {
        const genre = await Genre.findByPk(genre_id);
        if (!genre){
            res.status(409).json({ error: 'Unknow genre id: ' + genre_id });
            return;
        }
        await genre.update(req.body);
        res.status(201).json(genre);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;