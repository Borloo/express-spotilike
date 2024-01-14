const jwt = require("jsonwebtoken");

class JwtService{

    constructor(secret_key) {
        this.secret_key = secret_key;
    }

    generate_token(data){
        return jwt.sign(data, this.secret_key)
    }

    authenticate_token(req, res, next){
        const token = req.header('Authorization');
        if (!token) return res.status(401).json({error: "Unauthorized"});
        const user = this.verify_token(token);
        if (!user) return res.status(403).json({error: "Forbidden"});
        req.user = user;
        next();
    }

    verify_token(token){
        try {
            return jwt.verify(token.split(" ")[1], this.secret_key);
        } catch (error){
            return null;
        }
    }
}

module.exports = JwtService