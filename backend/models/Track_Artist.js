const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Track_Artist', {
    trackId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Track',
        key: 'id'
      },
      unique: true
    },
    artistId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Artist',
        key: 'id'
      },
      unique: true
    }
  }, {
    sequelize,
    tableName: 'Track_Artist',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_Track_Artist_1",
        unique: true,
        fields: [
          { name: "trackId" },
          { name: "artistId" },
        ]
      },
    ]
  });
};
