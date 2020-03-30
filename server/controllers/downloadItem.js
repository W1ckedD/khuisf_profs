const Prof = require('../models/Prof');

exports.createDownload = async (req, res, next) => {
    try {
        const { profId } = req.query;
        const { name, url } = req.body;
        const prof = await Prof.findByPk(profId);
        const downLoadList = await prof.getDownloadList();
        const result = await downLoadList.createDownloadItem({ name, url });
        res.status(200).json({ success: true, data: result });
    } catch (err) {
        console.log(err);
        res.status(422).json({ error: 'server error' });
    }
};

exports.getAllDownloads = async (req, res, next) => {
    try {
        const { profId } = req.query;
        const prof = await Prof.findByPk(profId);
        const downLoadList = await prof.getDownloadList();
        const downLoads = await downLoadList.getDownloadItems();
        res.status(200).json({
            success: true,
            data: downLoads
        });
    } catch (err) {
        console.log(err);
        res.status(422).json({ error: 'server error' });
    }
};

exports.deleteDownload = async (req, res, next) => {
    try {
        const { profId } = req.query;
        const { id } = req.params;
        const prof = await Prof.findByPk(profId);
        const downLoadList = await prof.getDownloadList();
        const downLoads = await downLoadList.getDownloadItems({
            where: { id }
        });
        const result = await downLoads[0].destroy();
        res.status(200).json({
            success: true,
            data: result
        });
    } catch (err) {
        console.log(err);
        res.status(422).json({ error: 'server error' });
    }
};
