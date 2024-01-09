const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('STYLE', {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: true,
      unique: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'STYLE',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_STYLE_1",
        unique: true,
        fields: [
          { name: "title" },
        ]
      },
    ]
  });
};
