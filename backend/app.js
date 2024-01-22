const express = require('express');
const {sequelize} = require("./models");
const app = express();
const PORT = process.env.PORT ||3000;

const AppService = require("./services/AppService");
const appService = new AppService(app, sequelize, PORT);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

appService.init_app();