import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonModel } from 'src/app/models/pokemon';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  equipoPokemon: PokemonModel[] = [];

  constructor(public _pokemonService: PokemonService) { }

  ngOnInit(): void {
    if (this._pokemonService.obtenerEquipoStorage()) {
      this.equipoPokemon = this._pokemonService.obtenerEquipoStorage();
    }
  }

  generarEquipoAleatorio() {
    Swal.fire({
      title: '¿Esta Seguro?',
      text: `Si ya cuenta con un equipo creado, este será reemplazado por el nuevo`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if (resp.value) {
        this._pokemonService.equipoRandom();
        this.equipoPokemon = this._pokemonService.equipoPokemon;
      }
    });
  }

}
