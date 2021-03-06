"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
      username: { type: DataTypes.STRING,
                  primaryKey: true,
                  allowNull: false,
                  unique: true}, // lastname.firstname
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      role: { type: DataTypes.STRING, defaultValue: 'User'},
      active: { type: DataTypes.BOOLEAN, defaultValue: 'true'}
    }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Item, {foreignKey: 'Owner'})
      }
    }
  });

  return User;
};
