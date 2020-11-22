import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonModel } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url: string = 'https://pokeapi.co/api/v2';

  equipoPokemon: PokemonModel[] = [];

  listaCapturados: PokemonModel[] = [];

  constructor(private _http: HttpClient) { }

  getPokemon(id: number) {
    return this._http.get(`${this.url}/pokemon/${id}`);
  }

  equipoRandom() {
    this.equipoPokemon = [];
    for (let index = 0; index < 6; index++) {
      let randomId = this.simulateEvent(151);
      this._http.get(`${this.url}/pokemon/${randomId}`).subscribe((response: PokemonModel) => {
        this.equipoPokemon.push(response);
        console.log(this.equipoPokemon);
        this.guardarEquipoStorage();
      }, error => {
        console.log(error);
      });

    }
  }

  guardarEquipoStorage() {
    localStorage.setItem('equipo', JSON.stringify(this.equipoPokemon));
  }

  obtenerEquipoStorage() {
    if (localStorage.getItem('equipo')) {
      return JSON.parse(localStorage.getItem('equipo'));
    }
  }

  obtenerCapturas() {
    if (localStorage.getItem('capturas')) {
      return JSON.parse(localStorage.getItem('capturas'));
    }else{
      return [];
    }
  }

  capturaExitosa(pokemon: PokemonModel) {
    console.log(this.listaCapturados);
    if (this.obtenerCapturas != undefined) {
      this.listaCapturados = this.obtenerCapturas();
    }
    console.log(this.listaCapturados);
    this.listaCapturados.push(pokemon);
    localStorage.setItem('capturas', JSON.stringify(this.listaCapturados));
    console.log(this.listaCapturados);
  }

  simulateEvent(numEvents) {
    let event = Math.floor(numEvents * Math.random() + 1);
    return event;
  }

}
