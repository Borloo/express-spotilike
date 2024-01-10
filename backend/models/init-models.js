var DataTypes = require("sequelize").DataTypes;
var _Album = require("./Album");
var _Artist = require("./Artist");
var _Genre = require("./Genre");
var _Track = require("./Track");
var _Track_Album = require("./Track_Album");
var _Track_Artist = require("./Track_Artist");
var _Track_Genre = require("./Track_Genre");
var _User = require("./User");

function initModels(sequelize) {
  var Album = _Album(sequelize, DataTypes);
  var Artist = _Artist(sequelize, DataTypes);
  var Genre = _Genre(sequelize, DataTypes);
  var Track = _Track(sequelize, DataTypes);
  var Track_Album = _Track_Album(sequelize, DataTypes);
  var Track_Artist = _Track_Artist(sequelize, DataTypes);
  var Track_Genre = _Track_Genre(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);

  Track.belongsTo(Album, { as: "album", foreignKey: "albumId"});
  Album.hasMany(Track, { as: "Tracks", foreignKey: "albumId"});
  Track_Album.belongsTo(Album, { as: "album", foreignKey: "albumId"});
  Album.hasMany(Track_Album, { as: "Track_Albums", foreignKey: "albumId"});
  Album.belongsTo(Artist, { as: "artist", foreignKey: "artistId"});
  Artist.hasMany(Album, { as: "Albums", foreignKey: "artistId"});
  Track.belongsTo(Artist, { as: "artist", foreignKey: "artistId"});
  Artist.hasMany(Track, { as: "Tracks", foreignKey: "artistId"});
  Track_Artist.belongsTo(Artist, { as: "artist", foreignKey: "artistId"});
  Artist.hasMany(Track_Artist, { as: "Track_Artists", foreignKey: "artistId"});
  Track.belongsTo(Genre, { as: "genre", foreignKey: "genreId"});
  Genre.hasMany(Track, { as: "Tracks", foreignKey: "genreId"});
  Track_Genre.belongsTo(Genre, { as: "genre", foreignKey: "genreId"});
  Genre.hasMany(Track_Genre, { as: "Track_Genres", foreignKey: "genreId"});
  Track_Album.belongsTo(Track, { as: "track", foreignKey: "trackId"});
  Track.hasMany(Track_Album, { as: "Track_Albums", foreignKey: "trackId"});
  Track_Artist.belongsTo(Track, { as: "track", foreignKey: "trackId"});
  Track.hasMany(Track_Artist, { as: "Track_Artists", foreignKey: "trackId"});
  Track_Genre.belongsTo(Track, { as: "track", foreignKey: "trackId"});
  Track.hasMany(Track_Genre, { as: "Track_Genres", foreignKey: "trackId"});

  return {
    Album,
    Artist,
    Genre,
    Track,
    Track_Album,
    Track_Artist,
    Track_Genre,
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
