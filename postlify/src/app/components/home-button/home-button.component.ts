import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-button',
  imports: [],
  templateUrl: './home-button.component.html',
  styleUrl: './home-button.component.css'
})
export class HomeButtonComponent {
  @Input() text!: string;
  @Input() action!: boolean;
}
