import { Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { InsulinaComponent } from "./insulina/insulina.component";
import { EndocrinologiaComponent } from "./endocrinologia/endocrinologia.component";
import {UsuarioComponent} from "./usuario/usuario.component";

export const routes: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  { path: 'insulina', component: InsulinaComponent },
  { path: 'endocrinologia', component: EndocrinologiaComponent },
  { path: '**', redirectTo: 'usuario', pathMatch: 'full' },
];
