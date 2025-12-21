import { Component } from '@angular/core';
import { ActivatedRoute, Router,  RouterModule} from '@angular/router';
import { Car } from '../../Models/car';
import { CarsService } from '../../Services/Cars/cars.service'; 

@Component({
  selector: 'app-successfull-purchase-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './successfull-purchase-page.component.html',
  styleUrl: './successfull-purchase-page.component.scss'
})




export class SuccessfullPurchasePageComponent {
  //redirect here, show message, await 5 seconds, redirect to main
  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService,
    private router: Router
  ) {}

  carId: number = 0;

  car: Car = {
    id: 0,
    name: '',
    category: '',
 
    imageSrc: '',
  };

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const idString = params.get('id');
      if (idString) {
        this.carId = parseInt(idString, 10); // convert string to number
        console.log(this.carId); // log the carId to the console
      }
    });

    this.carsService.GetSingleCar(this.carId).subscribe({
      next: (car) => {
        this.car = car;
        this.carsService.GetImage(car.id).subscribe({
          next: (imageData: Blob) => {
            car.imageSrc = URL.createObjectURL(imageData);
          },
          error: (error: any) => {
            console.error(error);
          },
        });
      },
    });

    // Waiting 3 sec so user can read the message
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000);
  }
}
