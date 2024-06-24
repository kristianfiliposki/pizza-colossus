import { Component , Input, Output, EventEmitter, computed,signal} from '@angular/core';
import { chefs } from '../../chefs';
import { MainComponent } from '../main/main.component';
import { Interface } from 'readline';

interface pizza
{
  id:number,
  nome: string,
  prezzo: number,
  ingredienti:string[],
}


interface User
{
  id : number;
  nome: string;
  anni: number;
  prezzo: number;
  pizze: pizza
}

@Component({
  selector: 'app-operatore',
  standalone: true,
  imports: [],
  templateUrl: './operatore.component.html',
  styleUrl: './operatore.component.css'
})



export class OperatoreComponent {

  chef = chefs;
  ciao = "caio";
  giocatori = [
    "luigi",
    "franco",
    "sandro",
    "giulio",
  ]




  /* input */
  @Input() operatore ?: any;
  @Input() vincitore ?:string[];
  /* output */
  @Output() select = new EventEmitter();


  prendidati(){
    console.log(this.operatore.nome)
    this.select.emit(this.operatore);
  }





}
