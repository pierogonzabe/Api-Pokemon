import { Injectable } from '@angular/core';
import {LoginI} from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string="https://pokeapi.co/api/v2/pokemon";
  

  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "/1";
    return this.http.post<ResponseI>(direccion,form);
  }
}
