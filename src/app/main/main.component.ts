import { chefs } from '../../chefs';
import { Component} from '@angular/core';
import { OperatoreComponent } from '../operatore/operatore.component';

interface User
{
  id : number;
  nome: string;
  anni: number;
  prezzo: number;
  pizze: pizza;
}

interface pizza
{
  nome: string,
  prezzo: number,
  ingredienti:string[],
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    OperatoreComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  lista = [
    "luigi",
    "franco",
    "sandro",
    "giulio",
  ]

 operatori = chefs;

  dato ?: any;



  putdati(value: any) {
    console.log(value.pizze);
    this.dato = value.pizze;
    return this.dato;
  }





}
