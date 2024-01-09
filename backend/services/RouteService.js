const userRoutes = require('./../routes/app-user');

class RouteService{

    constructor(app) {
        this.app = app;
    }

    init_routes(){
        this.set_users();
    }

    set_users(){
        this.app.use('/users', userRoutes);
    }
}

module.exports = RouteService;