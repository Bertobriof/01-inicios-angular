import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
  // No es recomendable tener los datos aquí. Para ello usamos los servicios en su lugar.
 /*  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 500
    },
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ]; */

/*   onNewCharacter(character: Character):void {
    this.characters.push(character);
  }

  onDeleteCharacter(index: number):void {
    this.characters.splice(index,1);

  } */
  constructor( private DbzService:DbzService) {}

  get characters(): Character[] {
    return [...this.DbzService.characters];
  }
  onDeleteCharacter(id: string):void {
    this.DbzService.deleteCharacterById(id);
  }
  onNewCharacter(character: Character):void {
    this.DbzService.addCharacter(character);
  }
}
