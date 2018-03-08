import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../classes/lists';


/**
* Filtro puro se ejecuta cuando la data cambia.
* Filtro Impuro exactamente lo contrario
*/
@Pipe({
  name: 'pendings',
  pure: false
})
export class PendingsPipe implements PipeTransform {
  transform(lists: List[], isCompleted: boolean = true): List[] {
    let newList:List[] = [];

    for(let list of lists) {
      if (list.completed == isCompleted) {
          newList.push(list);
      }
    }

    return newList;
  }
}
