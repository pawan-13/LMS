import jwt from 'jsonwebtoken';

export const isAuthenticated = (req, res) => {
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
    } catch (error) {
        console.log(error.message, 'error');
    }

}