import jwt from 'jsonwebtoken';

const isAuthenticated = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'User not Authenticated'
            });
        }

        const decode = jwt.verify(token, process.env.SECRET_KEY)
        if (!decode) {
            return res.status(401).json({
                success: false,
                message: 'Invalid Token!'
            })
        }
        req.id = decode.userId;
        next();
    } catch (error) {
        console.log(error.message, 'error');
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
}

export default isAuthenticated;