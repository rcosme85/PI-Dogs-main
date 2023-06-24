const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Dogs",
    {
      id: {
        type: DataTypes.UUID,
        //type: DataTypes.INTEGER,
        primaryKey: true,
        //autoIncrement: true,
        defaultValue: DataTypes.UUIDV4,
      },
      Imagen: {
        type: DataTypes.STRING,
        isUrl: true,
        defaultValue: "https://acortar.link/Ehoa3I",
      },
      Nombre: {
        type: DataTypes.STRING,
        //notNull: false,
        allowNull: false,
      },
      Altura: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Peso: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Anos_vida: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created: {
        type: DataTypes.BOOLEAN,
        defaultValue:true
      }
    },
    { timestamps: false }
  );
};
