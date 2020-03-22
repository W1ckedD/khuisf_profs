const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");

exports.createAdmin = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const admin = await Admin.create({ username, password });
        const token = jwt.sign({ Id: admin.id }, "SECRET_KEY");
        res.status(200).json({
            success: true,
            data: admin,
            token
        });
    } catch (err) {
        console.log(err);
        res.status(422).json({ error: "server error" });
    }
};

exports.signin = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const admin = await Admin.findOne({ username });
        if (!admin) {
            res.status(422).json({ error: "invalid credentials" });
        }
        if (admin.password !== password) {
            res.status(422).json({ error: "invalid credentials" });
        }
        const token = jwt.sign({ Id: admin.id }, "SECRET_KEY");
        res.status(200).json({
            success: true,
            data: admin,
            token
        });
    } catch (err) {
        console.log(err);
        res.status(422).json({ error: 'server error' });
    }
};
