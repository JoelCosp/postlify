import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from '../post-card/post-card.component';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule, PostCardComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  posts = [
    {
      title: "MIS NUEVOS PANTIES",
      description: "Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla",
      img: "https://th.bing.com/th/id/OIP.s1Zu5hL_LfYEjWEc3bmnrgHaEK?rs=1&pid=ImgDetMain"
    },
    {
      title: "Hola caracola",
      description: "Tararin tan tan",
      img: "https://th.bing.com/th/id/OIP.s1Zu5hL_LfYEjWEc3bmnrgHaEK?rs=1&pid=ImgDetMain"
    },
    {
      title: "MIS NUEVOS PANTIES",
      description: "Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla",
      img: "https://th.bing.com/th/id/OIP.s1Zu5hL_LfYEjWEc3bmnrgHaEK?rs=1&pid=ImgDetMain"
    },
    {
      title: "MIS NUEVOS PANTIES",
      description: "Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla",
      img: "https://th.bing.com/th/id/OIP.s1Zu5hL_LfYEjWEc3bmnrgHaEK?rs=1&pid=ImgDetMain"
    },
    {
      title: "MIS NUEVOS PANTIES",
      description: "Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla",
      img: "https://th.bing.com/th/id/OIP.s1Zu5hL_LfYEjWEc3bmnrgHaEK?rs=1&pid=ImgDetMain"
    },
    {
      title: "MIS NUEVOS PANTIES",
      description: "Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla",
      img: "https://th.bing.com/th/id/OIP.s1Zu5hL_LfYEjWEc3bmnrgHaEK?rs=1&pid=ImgDetMain"
    },
    {
      title: "MIS NUEVOS PANTIES",
      description: "Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla",
      img: "https://th.bing.com/th/id/OIP.s1Zu5hL_LfYEjWEc3bmnrgHaEK?rs=1&pid=ImgDetMain"
    },
    {
      title: "MIS NUEVOS PANTIES",
      description: "Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla",
      img: "https://th.bing.com/th/id/OIP.s1Zu5hL_LfYEjWEc3bmnrgHaEK?rs=1&pid=ImgDetMain"
    },
  ]
}
