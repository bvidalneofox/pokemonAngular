import { Component, OnInit } from '@angular/core';
import { PokemonModel } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-lista-capturas',
  templateUrl: './lista-capturas.component.html',
  styleUrls: ['./lista-capturas.component.css']
})
export class ListaCapturasComponent implements OnInit {

  listaCapturas: PokemonModel[] = [];
  fecha: Date;

  constructor(public _pokemonService: PokemonService) {
    this.fecha = new Date();
  }

  ngOnInit(): void {
    if (this._pokemonService.obtenerCapturas()) {
      this.listaCapturas = this._pokemonService.obtenerCapturas();
    }
  }

}
