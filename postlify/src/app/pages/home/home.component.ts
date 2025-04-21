import { Component } from '@angular/core';
import { HomeButtonComponent } from '../../components/home-button/home-button.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HomeButtonComponent, CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  btns = [
    {
      text: "CREATE",
      route: "/create-post"
    },
    {
      text: "READ",
      route: "/read-post"
    },
  ]
}
