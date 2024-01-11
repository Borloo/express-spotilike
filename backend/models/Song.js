const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Song', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      unique: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Artist',
        key: 'id'
      }
    },
    gender_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gender',
        key: 'id'
      }
    },
    album_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Album',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Song',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_Song_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
