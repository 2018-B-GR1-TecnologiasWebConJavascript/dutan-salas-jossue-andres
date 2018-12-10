import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [
    {
      id: 1,
      nombre: 'Adrian'
    },
    {
      id: 2,
      nombre: 'Jossue'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  hola(){
    return 'Hola';
  }
  imprimir(usuario:Usuario){
    console.log('holas', usuario)
    const indiceUsuarioEliminar = this.usuarios
      .findIndex((user) => {
        return user.id === usuario.id
        })
    this.usuarios.splice(indiceUsuarioEliminar, 1)
  }

}

interface Usuario {
  nombre?: string;
  id?: number;
}
