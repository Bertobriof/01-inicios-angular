import { Component, EventEmitter, Input, Output } from '@angular/core';
import{ v4 as uuid } from 'uuid';
import { Character } from './../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    id: uuid(),
    name: 'Trunks',
    power: 10
  }]
  // Evento para recoger el id del array.
   @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(uuid: string):void {
    // TODO: emitir el ID del personaje
    this.onDeleteId.emit(uuid);
  }

}
