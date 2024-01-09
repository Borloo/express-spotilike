const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('USER', {
    nickname: {
      type: DataTypes.STRING(25),
      allowNull: true,
      unique: true
    },
    password: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(55),
      allowNull: true,
      unique: true
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'USER',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_USER_1",
        unique: true,
        fields: [
          { name: "nickname" },
        ]
      },
      {
        name: "sqlite_autoindex_USER_2",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
