import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MainComponent } from '../main/main.component';
import { chefs } from '../../chefs';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    HeaderComponent,
    MainComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pizza-colossus';

  chef= chefs;
}
