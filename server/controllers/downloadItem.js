const Prof = require('../models/Prof');
const DownLoadList = require('../models/DownloadList');

exports.createDownloadItem = async (req, res, next) => {
    try {
        const { profId } = req.query;
        const { name, url } = req.body;
        let downLoadList;
        downLoadList = await DownLoadList.findOne({ where: { profId } });
        if (!downLoadList) {
            downLoadList = await DownLoadList.create({ profId });
        }
        const result = await downLoadList.addDownloadItem({ name, url });
        res.status(200).json({ success: true, data: result });
    } catch (err) {
        console.log(err);
        res.status(422).json({ error: 'server error' });
    }
};
