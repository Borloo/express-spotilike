const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Track_Genre', {
    trackId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Track',
        key: 'id'
      },
      unique: true
    },
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Genre',
        key: 'id'
      },
      unique: true
    }
  }, {
    sequelize,
    tableName: 'Track_Genre',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_Track_Genre_1",
        unique: true,
        fields: [
          { name: "trackId" },
          { name: "genreId" },
        ]
      },
    ]
  });
};
