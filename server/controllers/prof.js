const Prof = require('../models/Prof');
const Position = require('../models/Position');
const Major = require('../models/Major');
const Faculty = require('../models/Faculty');

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
        
        const faculty = await Faculty.findByPk(parseInt(facultyId));
        const major = await Major.findByPk(parseInt(majorId));
        const position = await Position.findByPk(parseInt(positionId));
        const newProf = await Prof.create({
            firstName,
            lastName,
            imageUrl,
            email,
            researchField,
            bio
        });
        await faculty.addProf(newProf);
        await position.addProf(newProf);
        await major.addProf(newProf);
        newProf.createDownloadList();
        res.status(200).json({
            success: true,
            data: newProf
        });
    } catch (err) {
        console.log(err);
        res.status(422).json({ error: 'server error' });
    }
};

exports.getAllProfs = async (req, res, next) => {
    try {
        const profs = await Prof.findAll();
        const jsonProfs = JSON.parse(JSON.stringify(profs));
        for (const i in profs) {
            jsonProfs[i].faculty = await profs[i].getFaculty();
            jsonProfs[i].position = await profs[i].getPosition();
            jsonProfs[i].major = await profs[i].getMajor();
        }
        res.status(200).json({
            success: true,
            data: jsonProfs
        });
    } catch (err) {
        console.log(err);
        res.status(404).json({ error: 'no profs found' });
    }
};

exports.getProfById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const prof = await Prof.findByPk(id);
        const jsonProf = JSON.parse(JSON.stringify(prof));
        const modifiedProf = {
            ...jsonProf,
            faculty: await prof.getFaculty(),
            major: await prof.getMajor(),
            position: await prof.getPosition()
        };
        res.status(200).json({
            success: true,
            data: modifiedProf
        });
    } catch (err) {
        console.log(err);
        res.status(404).json({ error: 'no profs found matching given info' });
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
        res.status(404).json({ error: 'no profs found matching given info' });
    }
};
