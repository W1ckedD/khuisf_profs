const Faculty = require('../models/Faculty');

exports.getAllFaculties = async (req, res, next) => {
    try {
        const faculties = await Faculty.findAll();
        res.status(200).json({
            success: true,
            data: faculties
        });
    } catch (err) {
        res.status(422).json({ error: 'server error' });
    }
};

exports.getFaculty = async (req, res, next) => {
    try {
        const { id } = req.params;
        const faculty = await Faculty.findByPk(id);
        res.status(200).json({
            success: true,
            data: faculty
        });
    } catch (err) {
        res.status(404).json({ error: 'no faculty found matching given info' });
    }
};

exports.createFaculty = async (req, res, next) => {
    try {
        const { name } = req.body;
        const newFaculty = await Faculty.create({ name });
        res.status(200).json({
            success: true,
            data: newFaculty
        });
    } catch (err) {
        console.log(err);
        res.status(422).json({ error: 'server error' });
    }
};

exports.deleteFaculty = async (req, res, next) => {
    try {
        const { id } = req.params;
        const faculty = await Faculty.findByPk(id);
        const result = await faculty.destroy();
        res.status(200).json({
            success: true,
            data: result
        });
    } catch (err) {
        res.status(404).json({ error: 'no faculty found matching given info' });
    }
};
