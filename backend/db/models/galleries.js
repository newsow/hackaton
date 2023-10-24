'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Galleries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Galleries.hasOne(models.Users,{
        foreignKey:'user_id',
        onDelete:'CASCADE'
      })
      Galleries.hasMany(models.Albums,{
        foreignKey:'gallery_id',
        onDelete:'CASCADE'
      })
    }
  }
  Galleries.init({
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Galleries',
    timestamps:false
  });
  return Galleries;
};