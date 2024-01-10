const express = require('express');
const router = express.Router();
const { initModels } = require('../models/init-models');
const {sequelize} = require("./../models");

const { User } = initModels(sequelize);

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        console.log(JSON.stringify(users))
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/signin', async (req, res) => {
    try {
        const { username, password, email } = req.body;
        if (!check_users(res, username, password, email)){
            return;
        }
        const user = await User.create({
            username,
            password,
            email,
        });
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

function check_users(res, username, password, email){
    if (!username){
        res.status(400).json({ error: 'Username required' });
        return false;
    }
    if (!password){
        res.status(400).json({ error: 'Password required' });
        return false;
    }
    if (!email){
        res.status(400).json({ error: 'Email required' });
        return false;
    }
    return true;
}

module.exports = router;