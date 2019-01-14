import {Component, OnInit} from '@angular/core';
import {RazaRestService} from "../../servicios/rest/raza-rest.service";
import {Raza} from "../../interfaces/raza";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-ruta-crear-raza',
  templateUrl: './ruta-crear-raza.component.html',
  styleUrls: ['./ruta-crear-raza.component.scss']
})
export class RutaCrearRazaComponent implements OnInit {

  raza: RazaEjemplo = {
    nombre: '',
    apellido: ''
  };

  constructor(private readonly _razaRestService: RazaRestService) {
  }

  ngOnInit() {
  }

  crearRaza(formulario: NgForm) { //
    console.log('Formulario', formulario);

    if (this.nombreContieneA((this.raza.nombre.toString()))) {
      const crearRaza$ = this._razaRestService
        .create(this.raza.nombre);

      crearRaza$
        .subscribe(
          (raza: Raza) => {
            console.log('Raza', raza);
            alert(`Raza creada: ${raza.nombre}`)
          },
          (error) => {
            console.log('Error: ', error);
          },
        )
    }
    else {
      alert('Error, no contiene una letra A')
    }
  }

  nombreContieneA(nombre:string):boolean {
    return nombre.toLowerCase().includes('a')
  }

}

interface RazaEjemplo {
  nombre: string;
  apellido: string;
}
