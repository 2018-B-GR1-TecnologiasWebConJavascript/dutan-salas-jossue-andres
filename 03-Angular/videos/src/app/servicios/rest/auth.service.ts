//auth.service

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Raza} from "../../interfaces/raza";
import {map} from "rxjs/internal/operators";

@Injectable()
export class AuthService {

  usuario:any = {
    "createdAt": 1548453017194,
    "updatedAt": 1548453017194,
    "id": 1,
    "nombre": "ejemplo",
    "username": "jossue",
    "password": "123"
  };

  constructor (private readonly _httpClient: HttpClient){}

  login(username: string, password: string){
    const url = environment.url + '/raza/login';

    return this._httpClient.post(url, {
      username: username,
      password: password
    }).pipe(map(r => <Raza> r ))
  }

}
