const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ARTIST', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: true,
      unique: true
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    biographie: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ARTIST',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_ARTIST_1",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
