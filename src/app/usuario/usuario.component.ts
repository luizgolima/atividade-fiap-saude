import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../components/header/header.component";
import { RouterLink, RouterOutlet } from "@angular/router";
import { Usuario } from "./model/usuario";
import { UsuarioService } from "./service/usuario.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterLink, RouterOutlet],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent implements OnChanges, OnInit {

  usuario: Observable<Usuario>;

  constructor(private service: UsuarioService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.usuario = this.service.buscarDadosUsuario();
  }

  ngOnInit(): void {
    this.usuario = this.service.buscarDadosUsuario();
  }

  calcularIMC(peso: number, altura: number): number {
    const alturaEmMetros: number = altura / 100;
    return peso / (alturaEmMetros * alturaEmMetros);
  }

  interpretarIMC(imc: number): string {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
      return 'Peso saudável';
    } else if (imc >= 25 && imc <= 29.9) {
      return 'Sobrepeso';
    } else {
      return 'Obesidade';
    }
  }

}
