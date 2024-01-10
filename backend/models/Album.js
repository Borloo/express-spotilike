const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Album', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    coverImage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    releaseDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    artistId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Artist',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Album',
    timestamps: false
  });
};
