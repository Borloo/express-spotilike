const jwt = require("jsonwebtoken");
const secret_key = "secret_key";

class JwtService{

    constructor() {
    }

    generate_token(data){
        return jwt.sign(data, secret_key)
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
            return jwt.verify(token.split(" ")[1], secret_key);
        } catch (error){
            return null;
        }
    }
}

module.exports = JwtService