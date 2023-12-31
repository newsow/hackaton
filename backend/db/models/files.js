'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Files extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Files.belongsToMany(models.Albums,{through:models.Albums_Files})
    }
  }
  Files.init({
    path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Files',
  });
  return Files;
};