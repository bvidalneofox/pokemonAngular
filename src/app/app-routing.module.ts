import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ZonaSalvajeComponent } from './pages/zona-salvaje/zona-salvaje.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { ListaCapturasComponent } from './pages/lista-capturas/lista-capturas.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'zonaSalvaje', component: ZonaSalvajeComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'listaCapturas', component: ListaCapturasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
