import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsulinaService } from "./service/insulina.service";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Insulina } from "./model/insulina";

@Component({
  selector: 'app-insulina',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './insulina.component.html',
  styleUrl: './insulina.component.scss'
})
export class InsulinaComponent implements OnInit {

  insulina: Insulina;
  insulinaForm: FormGroup = new FormGroup({});

  constructor(private service: InsulinaService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.insulinaForm = this.formBuilder.group({
      tipoInsulina: ['', [Validators.required]],
      posologia: ['', [Validators.required]],
    });
  }

  enviarFormulario(): void {
    this.insulina.criadoEm = new Date().toDateString();
    this.insulina.tipoInsulina = this.insulinaForm.value.tipoInsulina;
    this.insulina.posologia = this.insulinaForm.value.posologia;
    this.service.criarGerenciamentoInsulina(this.insulina).subscribe((resposta: Insulina): void => {
      console.log(resposta);
    });
  }

}
