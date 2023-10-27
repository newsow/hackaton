'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Albums extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Albums.belongsTo(models.Galleries,{
        foreignKey:'gallery_id'
      })
      Albums.belongsToMany(models.Files,{through:models.Albums_Files})
      Albums.belongsToMany(models.Users,{through:models.Albums_Colabarators,foreignKey:"album_id"})
    }
  }
  Albums.init({
    name: DataTypes.STRING,
    gallery_id: DataTypes.INTEGER,
    is_private: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Albums',
    timestamps:false,
    createdAt:'createdAt'
  });
  return Albums;
};