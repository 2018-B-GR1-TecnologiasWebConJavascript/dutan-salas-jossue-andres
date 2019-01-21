/**
 * RazaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  holaMundo: function (peticion, respuesta) {
    return respuesta.ok('ok');
  },
  buscarPorNombre: async function (req, res) {
    // TENER ACCESO A TODOS LOS MODELOS
    // Body Query
    const parametros = req.allParams();

    var nombreCac = await Raza.find({
      nombre: {'startsWith': parametros.nombre}
    });

    return res.ok(nombreCac);

  },

  login:async (req, res) => {
    const parametros = req.allParams();

    var usuarioLogeado = await Raza.find(
      {
        username: parametros.username,
        password: parametros.password,
      }
    );

    console.log(usuarioLogeado);

    if(usuarioLogeado){
      return res.ok(usuarioLogeado);
    }else {
      return res.badRequest({
        mensaje: 'Usuario Invalido'
      });
    }
  }

};

