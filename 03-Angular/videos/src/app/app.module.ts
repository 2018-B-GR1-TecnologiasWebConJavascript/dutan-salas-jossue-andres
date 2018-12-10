import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaPerfilComponent } from './rutas/ruta-perfil/ruta-perfil.component';
import { RutaMenuComponent } from './rutas/ruta-menu/ruta-menu.component';
import { Ruta404Component } from './rutas/ruta404/ruta404.component';
import { RutaGestionUsuariosComponent } from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import { RutaGestionProductosComponent } from './rutas/ruta-gestion-productos/ruta-gestion-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaPerfilComponent,
    RutaMenuComponent,
    Ruta404Component,
    RutaGestionUsuariosComponent,
    RutaGestionProductosComponent //Nuevo Componente
  ], //Components
  imports: [
    BrowserModule,
    AppRoutingModule
  ], //modules
  providers: [], //Services
  bootstrap: [AppComponent] //Componente Principal
})
export class AppModule { }

/*
Rutas comunes 5 componentes:

Componente Principal: AppComponent
  <router-outlet></router-outlet>
  ->Inicio
  ->Login
  ->Perfil
  ->Menu
    <router-outlet></router-outlet>
    ->Gestion Usuarios
    ->Gestion Productos
  ->404-> Not Found
 */
