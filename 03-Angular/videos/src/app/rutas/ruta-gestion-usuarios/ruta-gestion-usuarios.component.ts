import { Component, OnInit } from '@angular/core';
import {UsuarioInterface, UsuarioServiceService} from "../../servicios/usuario-service.service";

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {

  usuarios = [];

  //Inyección de Dependencias
  constructor(
    private readonly _usuarioService:UsuarioServiceService
  ) { }

  ngOnInit() {
    //Cuando está listo el web component para mostrarse
    this.usuarios = this._usuarioService.usuarios;
  }

  eliminar(usuario:UsuarioInterface){
    this._usuarioService
      .eliminar(usuario.id);
  }

}

