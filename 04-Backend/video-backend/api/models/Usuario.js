/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    //estan los nombres de los atributos y la configuración de cada uno
  tableName: 'db_usuario', //nombre de la tabla

  attributes: {
    nombre:{
      type:'string',
      required: true,
    },
    apellido:{
      type:'string',
      required: true,
    },
    direccionCasa:{
      type:'string',
      columnName: 'direccion_casa',
    },
    cedula:{
      type:'string',
      unique: true,
      required: true,
    },
    sueldo:{
      type:'number',
      defaultsTo: 394.00,
    },
    correoElectronico:{
      type:'string',
      columnName: 'correo_electronico',
      isEmail: true,
    },
    numeroPropiedades:{
      type: 'number',
      columnName: 'numero_propiedades',
      max: 5,
      min: 0,
      defaultsTo: 0
    },
    estado: {
      type: 'boolean',
      defaultsTo: true,
    },
    rol:{
      type: 'string',
      isIn: ['Administrador', 'Usuario', 'Reporte'],
      defaultsTo: 'Usuario',
    },

  },

};

