import { pizza } from '../../interfaces';
import { Component, Input, Output ,EventEmitter,inject} from '@angular/core';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-over-box',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './over-box.component.html',
  styleUrl: './over-box.component.css'
})
export class OverBoxComponent {

  @Input() selected ?: boolean;
  @Output() cancel= new EventEmitter();
  @Output() add = new EventEmitter<pizza>();

  ingredient: string="";
  ingredienti: string[]=[
    "sugo",
    "mozzarella",
    "salsiccia",
    "salame",
    "peperoni",
    "mortadella",
    "alici",
    "patate",
    "Gorgonzola",
    "basilico",

  ];


  prezzofinale:number=0;
  enteredId=0;
  enteredNome='';
  enteredPrezzo=10;
  enteredIngredienti: string[]=[];

  calc(){
   this.prezzofinale= (10 * this.enteredIngredienti.length);
   return this.prezzofinale;

  }

  addIngredients(element:string) {
    this.ingredient=element;
    this.enteredIngredienti.push(this.ingredient)
    console.log(this.enteredIngredienti)
  }


  visiblee(){
      console.log(this.selected)
      this.selected= true;
      return this.selected;
  }

  Oncancel(){
    this.cancel.emit(this.visiblee())
  }

  invio(){
    console.log("invio")
    this.add.emit({
      id:this.enteredId,
      nome:this.enteredNome,
      prezzo:this.calc(),
      ingredienti:this.enteredIngredienti,
    })
  }

}
