import { Component } from '@angular/core';
import { CarsCardsComponent } from '../../../Components/cars-cards/cars-cards.component';

@Component({
  selector: 'app-admin-manage-existing-cars-page',
  standalone: true,
  imports: [CarsCardsComponent],
  templateUrl: './admin-manage-existing-cars-page.component.html',
  styleUrl: './admin-manage-existing-cars-page.component.scss'
})
export class AdminManageExistingCarsPageComponent {

}
