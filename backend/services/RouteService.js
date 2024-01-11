const userRoutes = require('./../routes/app-user');
const genreRoutes = require('./../routes/app-genre');

class RouteService{

    constructor(app) {
        this.app = app;
    }

    init_routes(){
        this.app.use('/users', userRoutes);
        this.app.use('/genres', genreRoutes)
    }
}

module.exports = RouteService;