import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {Ruta404Component} from "./rutas/ruta404/ruta404.component";
import {RutaMenuComponent} from "./rutas/ruta-menu/ruta-menu.component";
import {RutaPerfilComponent} from "./rutas/ruta-perfil/ruta-perfil.component";
import {RutaGestionUsuariosComponent} from "./rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component";
import {RutaGestionProductosComponent} from "./rutas/ruta-gestion-productos/ruta-gestion-productos.component";

//arreglo de rutas
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    //NOMBRE
    path:'inicio',
    //COMPONENTE
    component:RutaInicioComponent
  },
  {
    //NOMBRE
    path:'login',
    //COMPONENTE
    component:RutaLoginComponent
  },
  {
    //NOMBRE
    path:'no-encontrado',
    //COMPONENTE
    component:Ruta404Component
  },
  {
    //NOMBRE
    path:'menu',
    //COMPONENTE
    component:RutaMenuComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'gestion-productos'
      },
      {
        // /menu/gestion-usuarios
        path: 'gestion-usuarios',
        component: RutaGestionUsuariosComponent
      },
      {
        path: 'gestion-productos',
        component: RutaGestionProductosComponent
      }
    ]
  },
  {
    //NOMBRE
    path:'perfil',
    //COMPONENTE
    component:RutaPerfilComponent
  },
  {
    path:'**',
    redirectTo: 'no-encontrado'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
