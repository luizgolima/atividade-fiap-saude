import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Endocrinologia } from "../model/endocrinologia";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EndocrinologiaService {

  private baseUrl: string = 'http://localhost:8080/usuarios/1/dadosEndocrinologia';

  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {
  }

  criarGerenciamentoEndocrinologia(dados: Endocrinologia): Observable<Endocrinologia> {
    return this.http.post<Endocrinologia>(this.baseUrl, dados, {headers: this.headers});
  }

  atualizarGerenciamentoEndocrinologia(idDado: number, dados: Endocrinologia): Observable<Endocrinologia> {
    const url: string = `${this.baseUrl}/${idDado}`;
    return this.http.put<Endocrinologia>(url, dados, {headers: this.headers});
  }

}
