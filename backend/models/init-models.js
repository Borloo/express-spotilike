const DataTypes = require("sequelize").DataTypes;
const _ALBUM = require("./ALBUM");
const _ARTIST = require("./ARTIST");
const _MUSIC = require("./MUSIC");
const _STYLE = require("./STYLE");
const _SequelizeMeta = require("./SequelizeMeta");
const _USER = require("./USER");

function initModels(sequelize) {
  const ALBUM = _ALBUM(sequelize, DataTypes);
  const ARTIST = _ARTIST(sequelize, DataTypes);
  const MUSIC = _MUSIC(sequelize, DataTypes);
  const STYLE = _STYLE(sequelize, DataTypes);
  const SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  const USER = _USER(sequelize, DataTypes);


  return {
    ALBUM,
    ARTIST,
    MUSIC,
    STYLE,
    SequelizeMeta,
    USER,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
