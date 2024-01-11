const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Album', {
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
    cover_image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    release_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    artist_id: {
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
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_Album_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
