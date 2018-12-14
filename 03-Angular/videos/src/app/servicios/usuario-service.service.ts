import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  usuarios: UsuarioInterface[] = [
    {
      id: 1,
      nombre: 'Adrian'
    },
    {
      id: 2,
      nombre: 'Jossue'
    }
  ];

  registroActual = 3; //RECNUM -> Record Number

  crear(nuevoUsuario:UsuarioInterface){
    nuevoUsuario.id = this.registroActual;
    this.usuarios.push(nuevoUsuario);
    this.registroActual++;

    return nuevoUsuario
  }

  eliminar(id:number){
    const indiceUsuario = this.usuarios
      .findIndex(
        (usuario)=>{
          return usuario.id ===id;
        }
      )

    //const usuarioborrado = this.usuarios[indiceUsuario]; -> esto solo es la referencia

    const usuarioBorrado = JSON.parse(
      JSON.stringify(this.usuarios[indiceUsuario])
    );

    this.usuarios.splice(indiceUsuario, 1);

    return usuarioBorrado
  }

  actualizar(id:number, usuarioActualizado:UsuarioInterface){
    const indiceUsuario = this.usuarios
      .findIndex(
        (usuario)=>{
          return usuario.id ===id;
        }
      );

    this.usuarios[indiceUsuario] = usuarioActualizado;

    return usuarioActualizado;
  }

  buscar(id:number){
    return this.usuarios.find(u => u.id === id)
  }

  constructor() { }
}


export interface UsuarioInterface {
  nombre?: string;
  id?: number;
}
