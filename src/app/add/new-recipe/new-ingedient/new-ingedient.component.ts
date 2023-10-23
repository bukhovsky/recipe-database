import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-ingedient',
  templateUrl: './new-ingedient.component.html',
  styleUrls: ['./new-ingedient.component.css']
})
export class NewIngedientComponent {

  @Output() selected = new EventEmitter<boolean>();

ingredientsList = [
  'ingr1',
  'ingr2',
  'ingr3 '
]

onSelected(){
  this.selected.emit(true)
}

}
