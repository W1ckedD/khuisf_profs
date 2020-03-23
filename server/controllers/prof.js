const Prof = require("../models/Prof");

exports.createProf = async (req, res, next) => {
    try {
        const {
            firstName,
            lastName,
            imageUrl,
            email,
            researchField,
            bio,
            positionId,
            facultyId,
            majorId
        } = req.body;
        const newProf = await Prof.create({
            firstName,
            lastName,
            imageUrl,
            email,
            researchField,
            bio,
            positionId,
            facultyId,
            majorId
        });
        res.status(200).json({
            success: true,
            data: newProf
        });
    } catch (err) {
        console.log(err);
        res.status(422).json({ error: "server error" });
    }
};

exports.getAllProfs = async (req, res, next) => {
    try {
        const profs = await Prof.findAll();
        res.status(200).json({
            success: true,
            data: profs
        });
    } catch (err) {
        console.log(err);
        res.status(404).json({ error: "no profs found" });
    }
};

exports.getProfById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const prof = await Prof.findByPk(id);
        res.status(200).json({
            success: true,
            data: prof
        });
    } catch (err) {
        console.log(err);
        res.status(404).json({ error: "no profs found matching given info" });
    }
};

exports.deleteProf = async (req, res, next) => {
    try {
        const { id } = req.params;
        const prof = await Prof.findByPk(id);
        const result = await prof.destroy();
        res.status(200).json({ success: true, data: result });
    } catch (err) {
        console.log(err);
        res.status(404).json({ error: "no profs found matching given info" });
    }
};
