import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon-interface';

@Pipe({
  name: 'backgroundColorType'
})
export class BackgroundColorTypePipe implements PipeTransform {

  transform(pokemon:Pokemon): string {
      //devolver un gradient si tiene dos tipos, un valor unico si tiene un solo tipo
      return (pokemon.types.length==2)? `linear-gradient(-45deg, var(--${pokemon.types[1].type.name}-type) 50%, var(--${pokemon.types[0].type.name}-type) 50%)`:`var(--${pokemon.types[0].type.name}-type)`
  }

}
