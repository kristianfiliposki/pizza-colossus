import { Injectable, signal } from '@angular/core';
import { type pizza } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class MakepizzaService {
  constructor() { }

    /* questo è il dato che conterrà la pizza dell'utente */
    element: pizza = {
      id: 0,
      nome: "",
      prezzo: 0,
      ingredienti: [],
    };

    ListaDaAggiornare :pizza[]=[
      {
        id:0,
        nome:"boscaiola",
        prezzo:7,
        ingredienti:[
          "sugo",
          "mozzarella",
        ],
      },
      {
        id:1,
        nome:"zucchine",
        prezzo:9,
        ingredienti:[
          "sugo",
          "salame",
          "mozzarella",
        ],
      },
      {
        id:2,
        nome:"amatriciana",
        prezzo:10,
        ingredienti:[
          "prosciutto ",
          "cotto",
          "olive",
          "carciofini ",
          "sott'olio ",
          "pomodori ",
          "basilico",
          "funghi",

        ],
      },
      {
        id:3,
        nome:"patate",
        prezzo:2,
        ingredienti:[
          "ciao"
        ],
      },
    ];
    listaPizze = signal(this.ListaDaAggiornare);



    /* mostra se il form è visibile o meno */
    visible ?: boolean = true;

  /* prende il booleano sparato da over-box, che permetterà di rendere visibile la finestra di creazione pizza */
  FormVisible(){
    this.visible= false;
    console.log(this.visible)
  }

  FormClose(value:boolean){
    this.visible=value;
  }
    pizza = signal (this.element);

  /* Prende i dati sparati dal form che crea la pizza */
    aggiungiPizza(value:pizza){
      let listaDaAggiornare=this.listaPizze();
      listaDaAggiornare.push(value)
      this.listaPizze.set(listaDaAggiornare);
      console.log(this.listaPizze());
      this.visible=true;
    }


/*     get Pizza(){
      console.log(this.pizza)
      return this.pizza;
    } */





}
