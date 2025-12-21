import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../Services/Cars/cars.service';
import { Router , RouterModule} from '@angular/router';
import { UsersService } from '../../Services/Users/users.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})


export class NavbarComponent implements OnInit {
  LoggedIn: boolean = false;
  searchQuery = new FormControl('');
  searchResult: string | undefined;
  searchError: boolean | undefined;

  constructor(
    private carsService: CarsService,
    private router: Router,
  //  private usersService: UsersService
  ) {}

  // This Func Gets Urlpath, find matching link to router attribute, and then adds active to it
  ngOnInit(): void {
   // this.usersService.IsUserAuthenticated();
    //this.LoggedIn = this.usersService.LogStatus;
    this.setActiveLink();
  }

  // Sets link color to active
  private setActiveLink() {
    const path = window.location.pathname;
    const link = document.querySelector(`[routerLink="${path}"]`);
    if (link) {
      link.classList.add('active');
    }
  }
/*
  logout() {
    this.usersService.LogStatus = false;
    this.usersService.LogOut();
    location.reload();
  }
*/
  search() {
    this.carsService.GetCarIdUsingName(this.searchQuery.value!).subscribe({
      next: (carId) => {
        this.searchError = undefined;
        this.router.navigate(['/Cars/id/' + carId]);
      },
      error: (err) => {
        this.searchError = err.message;
        this.searchResult = 'Not found';
        console.log(err);
        setTimeout(() => {
          this.searchError = false;
        }, 2000);
      },
    });
  }
}
