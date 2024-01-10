const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Track_Album', {
    trackId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Track',
        key: 'id'
      },
      unique: true
    },
    albumId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Album',
        key: 'id'
      },
      unique: true
    }
  }, {
    sequelize,
    tableName: 'Track_Album',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_Track_Album_1",
        unique: true,
        fields: [
          { name: "trackId" },
          { name: "albumId" },
        ]
      },
    ]
  });
};
