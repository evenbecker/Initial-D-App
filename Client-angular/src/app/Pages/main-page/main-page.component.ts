import { Component } from '@angular/core';
import { CarsTitleComponent } from '../../Components/cars-title/cars-title.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CarsTitleComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
