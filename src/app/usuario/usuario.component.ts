import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../components/header/header.component";
import { SummaryComponent } from "../components/summary/summary.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import { Usuario } from "./model/usuario";
import { UsuarioService } from "./service/usuario.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SummaryComponent, RouterLink, RouterOutlet],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent implements OnInit {

  usuario: Observable<Usuario>
  constructor(private service: UsuarioService) {}

  ngOnInit(): void {
    this.usuario = this.service.buscarDadosUsuario();
  }

}
