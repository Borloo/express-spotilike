const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MUSIC', {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: true,
      unique: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: true
    },
    style: {
      type: DataTypes.STRING,
      allowNull: true
    },
    album: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MUSIC',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_MUSIC_1",
        unique: true,
        fields: [
          { name: "title" },
        ]
      },
    ]
  });
};
