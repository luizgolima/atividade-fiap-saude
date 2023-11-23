import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { EndocrinologiaService } from "./service/endocrinologia.service";
import { Endocrinologia } from "./model/endocrinologia";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-endocrinologia',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './endocrinologia.component.html',
  styleUrl: './endocrinologia.component.scss'
})
export class EndocrinologiaComponent implements OnInit {

  endocrinologia: Endocrinologia;
  endocrinologiaForm: FormGroup = new FormGroup({});

  constructor(private service: EndocrinologiaService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.endocrinologiaForm = this.formBuilder.group({
      nivelGlicose: ['', [Validators.required]],
      nivelHemoglobinaAc1: ['', [Validators.required]],
    });
  }


  enviarFormulario(): void {
    this.endocrinologia = {
      criadoEm: new Date().toISOString(),
      nivelGlicose: this.endocrinologiaForm.value.nivelGlicose,
      nivelHemoglobinaAc1: this.endocrinologiaForm.value.nivelHemoglobinaAc1
    };
    this.service.criarGerenciamentoEndocrinologia(this.endocrinologia).subscribe((resposta: Endocrinologia): void => {
      console.log(resposta);
    });
  }

}
