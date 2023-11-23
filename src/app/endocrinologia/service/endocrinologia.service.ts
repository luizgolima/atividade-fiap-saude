import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Endocrinologia } from "../model/endocrinologia";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EndocrinologiaService {

  private baseUrl: string = 'http://localhost:8080/usuarios/1/dadosEndocrinologia'

  constructor(private http: HttpClient) {
  }

  criarGerenciamentoEndocrinologia(dados: Endocrinologia): Observable<Endocrinologia> {
    return this.http.post<Endocrinologia>(this.baseUrl, dados);
  }

  atualizarGerenciamentoEndocrinologia(idDado: number, dados: Endocrinologia): Observable<Endocrinologia> {
    const url: string = `${this.baseUrl}/${idDado}`;
    return this.http.put<Endocrinologia>(url, dados);
  }

}
