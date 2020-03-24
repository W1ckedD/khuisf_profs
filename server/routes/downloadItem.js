const express = require('express');
const router = express.Router();
const requireAdmin = require('../middlewares/requireAdmin');
const { createDownloadItem } = require('../controllers/downloadItem');

router.post('/create-download-item', requireAdmin, createDownloadItem);


module.exports = router;