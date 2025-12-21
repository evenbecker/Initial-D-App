import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-authorized-page',
  standalone: true,
  imports: [],
  templateUrl: './not-authorized-page.component.html',
  styleUrl: './not-authorized-page.component.scss'
})
export class NotAuthorizedPageComponent implements OnInit {
  constructor(private router:Router){}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['Login']);
    }, 3000);
}
}
