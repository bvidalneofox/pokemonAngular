import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombreEntrenador: string = '';

  constructor(public _pokemonService: PokemonService) { }

  ngOnInit(): void {
    if(localStorage.getItem('nombre') != undefined){
    this.nombreEntrenador = localStorage.getItem('nombre');
  }
  }

  setNombre(nombre){
    console.log(nombre.value);
    this.nombreEntrenador = nombre.value;
    localStorage.setItem('nombre', this.nombreEntrenador);
  }

  generarEquipoRandom(){
    this._pokemonService.equipoRandom();
  }

}
