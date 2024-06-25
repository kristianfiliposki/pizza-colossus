import { Component , Input, Output, EventEmitter, computed,signal} from '@angular/core';

@Component({
  selector: 'app-operatore',
  standalone: true,
  imports: [],
  templateUrl: './operatore.component.html',
  styleUrl: './operatore.component.css'
})


export class OperatoreComponent {
  /* input */
  @Input() operatore ?: any;
  /* output */
  @Output() select = new EventEmitter<boolean>();


  prendidati(){
    console.log(this.operatore.nome)
    this.select.emit(this.operatore);
  }
}
