import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ZonaSalvajeComponent } from './pages/zona-salvaje/zona-salvaje.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { ListaCapturasComponent } from './pages/lista-capturas/lista-capturas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ZonaSalvajeComponent,
    EquipoComponent,
    ListaCapturasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
