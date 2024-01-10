const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Track', {
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
    duration: {
      type: DataTypes.TIME,
      allowNull: true
    },
    artistId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Artist',
        key: 'id'
      }
    },
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Genre',
        key: 'id'
      }
    },
    albumId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Album',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Track',
    timestamps: false
  });
};
