'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Albums_Colabarators extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Albums_Colabarators.init({
    user_id: DataTypes.INTEGER,
    album_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Albums_Colabarators',
    timestamps:false
  });
  return Albums_Colabarators;
};