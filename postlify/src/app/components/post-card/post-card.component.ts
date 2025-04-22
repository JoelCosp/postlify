import { Component, Input } from '@angular/core';
import { Post } from '../../models/Post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-card',
  imports: [CommonModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {
  @Input() post!: Post;
}
