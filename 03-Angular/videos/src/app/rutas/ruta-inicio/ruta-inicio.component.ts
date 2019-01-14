import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.scss']
})
export class RutaInicioComponent implements OnInit {

  imagenes:Imagenes[] = [
    {
      anio:2018,
      nombreImagen: '01.jpg',
      nombrePelicula: 'Mars'
    },{
      anio:2016,
      nombreImagen: '02.jpg',
      nombrePelicula: 'Puddin'
    },{
      anio:2015,
      nombreImagen: '03.jpg',
      nombrePelicula: 'Pelicula2'
    },{
      anio:2014,
      nombreImagen: '04.jpg',
      nombrePelicula: 'Pelicula1'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

export interface Imagenes {
  nombreImagen:string;
  nombrePelicula:string;
  anio: number;
}


