const User = require('../models/user');
const jwt = require('jsonwebtoken');

// USER GENERATE TOKEN
exports.generateToken = async (req, res) => {
    try {
        const usr = await User.findOne({ email: req.body.email });
        if (usr == null) {
            res.status(204).json({
                msg: "Auth Failed",
                data: null
            });
        } else {
            const token = jwt.sign({
                email: usr.email,
                userId: usr._id
            }, process.env.JWT_SECRET, {
                expiresIn: "1y"
            });

            res.status(200).json({
                msg: "Authenticated",
                data: token
            });
        }
    } catch (error) {
        res.status(500).json({
            msg: error,
            data: null
        });
    }
}
