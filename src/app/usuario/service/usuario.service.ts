import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../model/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl: string = 'http://localhost:8080/usuarios/1'

  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {
  }

  buscarDadosUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>(this.baseUrl, {headers: this.headers});
  }

}
