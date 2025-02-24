const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("character", {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull : false,
      primaryKey: true,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING
    },
    origin: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
    created: {
      type: DataTypes.STRING
    },
    episode: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    }
  },{timestamps: false});
};
