import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonModel } from 'src/app/models/pokemon';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-zona-salvaje',
  templateUrl: './zona-salvaje.component.html',
  styleUrls: ['./zona-salvaje.component.css']
})
export class ZonaSalvajeComponent implements OnInit {

  pokemonSalvaje: PokemonModel;

  capturaStatus: boolean = false;
  verDatos: boolean = false;

  constructor(public _pokemonService: PokemonService, private _route: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.numeroRandom();
      // this.reproducirMusica();
    }, 500);
  }

  numeroRandom() {
    let numberRandom = Math.floor((Math.random() * 151) + 1);

    this._pokemonService.getPokemon(numberRandom).subscribe((response: PokemonModel) => {
      console.log(response);
      this.pokemonSalvaje = response;
    }, error => {
      console.log(error);
    });
  }

  reproducirMusica() {
    let musica = document.getElementById('musica') as HTMLAudioElement;
    musica.play();
  }

  capturarPokemon() {
    this.capturaStatus = true;
    setTimeout(() => {
      if( this._pokemonService.simulateEvent(2) == 1){
        Swal.fire({
          title: '¡Muy Bien!',
          text: `¡${this.pokemonSalvaje.name} ha sido capturado!`,
          icon: 'success',
          allowOutsideClick: false
        });
        this._pokemonService.capturaExitosa(this.pokemonSalvaje);
        this._route.navigate(['/home']);
      }else{
        this.capturaStatus = false;
      }
    }, 3000);
  }

  escapar(){
    this.verDatos = false;
    delete this.pokemonSalvaje;
    this.numeroRandom();
  }

}
