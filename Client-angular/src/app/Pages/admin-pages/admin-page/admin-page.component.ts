import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss',
})
export class AdminPageComponent {}
