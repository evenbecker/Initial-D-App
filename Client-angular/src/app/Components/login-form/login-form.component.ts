import { Component } from '@angular/core';
import { User } from '../../Models/user';
import { UsersService } from './../../Services/Users/users.service';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  invalidLogin: boolean = false;
  LoggedIn: boolean = false;
  myUser: User = {
    name: '',
    id: 0,
    password: '',
  };

  // For Local Creds Saving
  constructor(private router: Router, private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.IsUserAuthenticated();
    this.LoggedIn = this.usersService.LogStatus;
  }
  public UserAuthenticated() {
    this.usersService.IsUserAuthenticated();
  }

  async login(form: NgForm) {
    const credentials = {
      name: form.value.name,
      password: form.value.password,
    };

    this.myUser.name = credentials.name;
    this.myUser.password = credentials.password;

    await this.usersService.PostLogin(credentials).subscribe({
      next: (response) => {
        const token = (<any>response).token;
        localStorage.setItem('jwt', token);
        this.invalidLogin = false;
        if (this.usersService.IsUserAuthenticated()) {
          this.usersService.LogStatus = true;
        }
        location.reload();
      },
      error: (err: any) => {
        this.invalidLogin = true;
      },
    });
  }
}
