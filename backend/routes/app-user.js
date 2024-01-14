const express = require('express');
const router = express.Router();
const { initModels } = require('../models/init-models');
const {sequelize} = require("./../models");
const JwtService = require('./../services/JwtService');

const { User } = initModels(sequelize);
const jwtService = new JwtService();

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/signin', async (req, res) => {
    try {
        const { username, password, email } = req.body;
        if (!username){
            res.status(400).json({ error: 'Username required' });
            return;
        }
        if (!password){
            res.status(400).json({ error: 'Password required' });
            return;
        }
        if (!email){
            res.status(400).json({ error: 'Email required' });
            return;
        }
        if (await check_username_exist(username)){
            res.status(409).json({ error: 'Username already taken' });
            return;
        }
        if (await check_email_exist(email)){
            res.status(409).json({ error: 'Email already used' });
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

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    if (!email){
        res.status(400).json({ error: 'Email required' });
        return;
    }
    if (!password){
        res.status(400).json({ error: 'Password required' });
        return;
    }
    try {
        const user = await User.findOne({
            where: {
                email: email
            }
        });
        if (!user){
            res.status(400).json({ error: 'User unknown' });
            return;
        }
        if (password !== user.password){
            res.status(400).json({ error: 'Wrong password' });
            return;
        }
        const token = jwtService.generate_token({user_id: user.id})
        res.status(201).json(token);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete("/:id", jwtService.authenticate_token.bind(jwtService), async (req, res) => {
    const user_id = req.params.id;
    try{
        const user = await User.findByPk(user_id);
        if (!user){
            res.status(409).json({ error: 'Unknow user id: ' + user_id });
            return;
        }
        await user.destroy();
        res.status(200).json({message: 'User id: ' + user_id + ' deleted' });
    } catch (error){
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

function check_username_exist(username){
    const user = User.findOne({
        where: {
            username: username
        }
    });
    if (!user){
        return null;
    }
    return user;
}

function check_email_exist(email){
    const user = User.findOne({
        where: {
            email: email
        }
    });
    if (!user){
        return null;
    }
    return user;
}

module.exports = router;