const sequelize = require("./dbConfig");

// Models
const Faculty = require("../models/Faculty");
const Major = require("../models/Major");
const Position = require("../models/Position");
const Prof = require("../models/Prof");
const DownloadList = require("../models/DownloadList");
const DownloadItem = require("../models/DownloadItem");

module.exports = async () => {
    Prof.hasOne(DownloadList);
    Prof.hasOne(Position);
    Prof.hasOne(Major);
    Prof.hasOne(Faculty);
    DownloadList.hasMany(DownloadItem);
    DownloadItem.belongsTo(DownloadList);
    const result = await sequelize.sync();
    
    console.log(
        `Connected to: ${result.options.dialect} ${result.config.host} ${result.config.database}`
    );
};
