const userRoutes = require('./../routes/app-user');
const genreRoutes = require('./../routes/app-genre');
const artistRoutes = require('./../routes/app-artist');

class RouteService{

    constructor(app) {
        this.app = app;
    }

    init_routes(){
        this.app.use('/users', userRoutes);
        this.app.use('/genres', genreRoutes);
        this.app.use('/artists', artistRoutes);
    }
}

module.exports = RouteService;