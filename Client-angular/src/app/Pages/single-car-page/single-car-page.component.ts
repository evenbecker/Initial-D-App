import { Component, OnInit } from '@angular/core';
import { Car } from '../../Models/car';
import { CarsService } from '../../Services/Cars/cars.service';
import { ActivatedRoute, Router , RouterModule} from '@angular/router';
import { SafeResourceUrlPipe } from '../../Pipes/safe-resource-url.pipe';


@Component({
  selector: 'app-single-car-page',
  standalone: true,
  imports: [SafeResourceUrlPipe, RouterModule],
  templateUrl: './single-car-page.component.html',
  styleUrl: './single-car-page.component.scss'
})



export class SingleCarPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService,
    private router: Router
  ) {}

  carId: number = 0;

  car: Car = {
    id: 0,
    name: 'Not Found',
    category: 'Not Found',
 
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
  }
}
