import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { Pokemon } from './interfaces/pokemon-interface';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(
    private http:HttpClient
  ){ }
  baseUrl:string = 'https://pokeapi.co/api/v2/';
  LAST_POKEMON:number=1010
  
  getPokemon(parametro:string | number):Observable<Pokemon>{
    //el parametro puede ser id o nombre
    const url:string = `${this.baseUrl}pokemon/${parametro}/`;
    return this.http.get<Pokemon>(url)
      .pipe(  
        map(data=>data),
        catchError(err=>of(err))
    );
    
  }
}
