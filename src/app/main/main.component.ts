import { chefs } from '../../chefs';
import { Component} from '@angular/core';
import { OverBoxComponent } from '../over-box/over-box.component';
import { OperatoreComponent } from '../operatore/operatore.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    OperatoreComponent,
    OverBoxComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  operatori = chefs;

  visible ?: boolean = true;



  dato ?: any;

  putdati(value: any) {
    console.log(value.pizze);
    this.dato = value.pizze;
    return this.dato;
  }

  visiblee(){
    this.visible= false;
    console.log(this.visible)
}

  cancel(value:boolean){
    this.visible=value;
  }
}
