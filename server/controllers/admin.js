const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.createAdmin = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = await Admin.create({
            username,
            password: hashedPassword
        });
        const token = jwt.sign({ Id: admin.id }, "SECRET_KEY");
        res.status(200).json({
            success: true,
            data: admin,
            token
        });
    } catch (err) {
        if (err.original.errno === 1062) {
            res.status(422).json({ error: "this admin is already registered" });
        }
        res.status(422).json({ error: "server error" });
    }
};

exports.signin = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const admin = await Admin.findOne({ where: { username } });
        if (!admin) {
            res.status(422).json({ error: "invalid credentials" });
        }
        const match = await bcrypt.compare(password, admin.password);
        if (match) {
            const token = jwt.sign({ Id: admin.id }, "SECRET_KEY");
            res.status(200).json({
                success: true,
                data: admin,
                token
            });
        } else {
            res.status(422).json({
                error: "invalid credential",
                data: {
                    match,
                    password,
                    hash: admin.password
                }
            });
        }
    } catch (err) {
        console.log(err);
        res.status(422).json({ error: "server error" });
    }
};
