// const Component = require('@angular/core').Component
import { Component } from '@angular/core'; //TS
import {} from 'http-server'; //JS

@Component({ //Decorador
  selector: 'app-root', //es reemplazado por el componente
  templateUrl: './app.component.html', //estructura
  styleUrls: ['./app.component.scss'], //estilos

})
export class AppComponent {

  title = 'videos';
  // @DecoradorMetodo()
  // metodo(){}
}
