import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/Models/Car.model';
import { CarsService } from 'src/app/Services/Cars/cars.service';
@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  cars: Car[] = [];
  isInitialized = false;
  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
  }
}