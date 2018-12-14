import { Component, OnInit } from '@angular/core';
import {UsuarioServiceService} from "../../servicios/usuario-service.service";
import {ActivatedRoute} from "@angular/router";
import {UsuarioInterface} from "../../servicios/usuario-service.service";

@Component({
  selector: 'app-ruta-ver-detalle-usuario',
  templateUrl: './ruta-ver-detalle-usuario.component.html',
  styleUrls: ['./ruta-ver-detalle-usuario.component.scss']
})
export class RutaVerDetalleUsuarioComponent implements OnInit {

  usuario:UsuarioInterface

  constructor(
    private readonly _usuarioService:UsuarioServiceService,
    private readonly _route:ActivatedRoute,
  ) { }

  ngOnInit() {

    const rutaActiva$ = this._route.params;

    rutaActiva$
      .subscribe(
        (parametros)=>{
          console.log(parametros); //devuelve un JSON {idUsuario = "1"}

          const usuarioEncontrado = this._usuarioService
            .buscar(+parametros.idUsuario); //el más sirve para transformar a number

          this.usuario = usuarioEncontrado;

          console.log(usuarioEncontrado)

        }
      )
  }

}
