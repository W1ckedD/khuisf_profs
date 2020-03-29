const sequelize = require('./dbConfig');

// Models
const Faculty = require('../models/Faculty');
const Major = require('../models/Major');
const Position = require('../models/Position');
const Prof = require('../models/Prof');
const DownloadList = require('../models/DownloadList');
const DownloadItem = require('../models/DownloadItem');

module.exports = async () => {
    Position.hasMany(Prof);
    Prof.belongsTo(Position);
    Major.hasMany(Prof);
    Prof.belongsTo(Major);
    Faculty.hasMany(Prof);
    Prof.belongsTo(Faculty);
    Prof.hasOne(DownloadList);
    DownloadList.hasMany(DownloadItem);
    DownloadItem.belongsTo(DownloadList);
    const result = await sequelize.sync({ force: false });

    console.log(
        `Connected to: ${result.options.dialect} ${result.config.host} ${result.config.database}`
    );
};
