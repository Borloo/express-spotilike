const express = require('express');
const router = express.Router();
const { initModels } = require('../models/init-models');
const {sequelize} = require("./../models");

router.get('/', async (req, res) => {
    const { User } = initModels(sequelize);
    try {
        const users = await User.findAll();
        console.log(JSON.stringify(users))
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;