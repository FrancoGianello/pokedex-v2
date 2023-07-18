import { AfterContentInit, AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, debounceTime, map, startWith } from 'rxjs';
import { Pokemon } from 'src/app/interfaces/pokemon-interface';
import { PokeApiService } from 'src/app/poke-api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, AfterContentInit {

  public pokemones:Pokemon[]=[]
  public pokemonesList:Pokemon[]=[]

  public limitador:number=6
  public filas:number=3
  
  constructor(
    private poke:PokeApiService
  ){

  }
  ngAfterContentInit(): void {
    //ordenar por id
    this.pokemones.sort((a,b) => a.id - b.id)
    //almacenar todos los pokemons (que no pintarlos)
    for (let i = 1; i <= this.poke.LAST_POKEMON; i++) {
      this.poke.getPokemon(i)
        .subscribe(
          data=>{
            this.pokemonesList.push(data)
          }
        )
    }
    console.log(this.pokemonesList);
    
  }
  ngOnInit(): void {
    let vistaInicial:number=this.limitador*this.filas;

    for (let i = 1; i <= vistaInicial; i++) {
      this.poke.getPokemon(i)
      .subscribe(
        data=>{
          // console.log(data);
          this.pokemones.push(data)
        }
      )
    }
  }
  
}