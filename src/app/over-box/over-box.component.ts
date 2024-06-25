import { FormsModule } from '@angular/forms';
import { Component, Input, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-over-box',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './over-box.component.html',
  styleUrl: './over-box.component.css'
})
export class OverBoxComponent {
  titolo:string = "";
  prezzo:number =13;



  @Input() selected ?: boolean;
  @Output() cancel= new EventEmitter();
  @Output() add = new EventEmitter<{
    titolo:string;
    prezzo:number;
  }>();


  visiblee(){
      console.log(this.selected)
      this.selected= true;
      return this.selected;
  }

  Oncancel(){
    this.cancel.emit(this.visiblee())
  }

  invio(){
    this.add.emit({
      titolo: this.titolo,
      prezzo: this.prezzo,
    })
  }

}
