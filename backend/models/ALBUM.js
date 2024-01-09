const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ALBUM', {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: true,
      unique: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    realease_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    music_list: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ALBUM',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_ALBUM_1",
        unique: true,
        fields: [
          { name: "title" },
        ]
      },
    ]
  });
};
