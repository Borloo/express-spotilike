const express = require('express');
const router = express.Router();
const {initModels} = require('../models/init-models');
const {sequelize} = require("./../models");
const JwtService = require('./../services/JwtService');

const {Artist, Song, Album} = initModels(sequelize);
const jwtService = new JwtService();

router.get('/', async (req, res) => {
    try {
        const artists = await Artist.findAll();
        res.status(201).json(artists);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

router.get('/:id/songs', async (req, res) => {
    const artist_id = req.params.id;
    try {
        const artist = await Artist.findByPk(artist_id, {
            include: [{
                model: Song,
                as: 'Songs'
            }]
        });
        if (!artist) {
            res.status(409).json({error: 'Unknow artist id: ' + artist_id});
            return;
        }
        res.status(201).json(artist.Songs);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

router.put('/:id', async (req, res) => {
    const artist_id = req.params.id;
    try {
        const artist = await Artist.findByPk(artist_id);
        if (!artist) {
            res.status(409).json({error: 'Unknow artist id: ' + artist});
            return;
        }
        await artist.update(req.body);
        res.status(201).json(artist);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

router.delete("/:id", jwtService.authenticate_token.bind(jwtService), async (req, res) => {
    const artist_id = req.params.id;
    try {
        const artist = await Artist.findByPk(artist_id);
        if (!artist) {
            res.status(409).json({error: 'Unknow artist id: ' + artist_id});
            return;
        }
        await Song.destroy({
            where: {
                artist_id: artist_id
            }
        });
        await Album.destroy({
            where: {
                artist_id: artist_id
            }
        });
        await artist.destroy();
        res.status(200).json({message: 'Artist id: ' + artist_id + ' deleted'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});


module.exports = router;