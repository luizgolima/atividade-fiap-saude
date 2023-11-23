import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Insulina } from "../model/insulina";

@Injectable({
  providedIn: 'root'
})
export class InsulinaService {

  private baseUrl: string = 'http://localhost:8080/usuarios/1/gerenciamentoInsulina'

  constructor(private http: HttpClient) {
  }

  criarGerenciamentoInsulina(dados: Insulina): Observable<Insulina> {
    return this.http.post<Insulina>(this.baseUrl, dados);
  }

  atualizarGerenciamentoInsulina(idGerenciamento: number, dados: Insulina): Observable<Insulina> {
    const url: string = `${this.baseUrl}/${idGerenciamento}`;
    return this.http.put<Insulina>(url, dados);
  }

}
