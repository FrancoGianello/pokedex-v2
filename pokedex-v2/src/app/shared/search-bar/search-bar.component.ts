import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { Pokemon } from 'src/app/interfaces/pokemon-interface';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Input('pokemonesList') pokemonesList:Pokemon[]=[]
  public pokemonesFiltered!:Observable<Pokemon[]>

  myControl = new FormControl('')
  
  constructor(){}

  ngOnInit(): void {
    this.pokemonesFiltered = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
   
  }
  private _filter(value: string): Pokemon[] {
    const filterValue = value.toLowerCase();

    return this.pokemonesList.filter(pokemon => 
      pokemon.name.toLowerCase().includes(filterValue));
  }
  
}