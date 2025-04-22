import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from '../post-card/post-card.component';
import { PostServiceService } from '../../services/post-service.service';
import { Post } from '../../models/Post';
@Component({
  selector: 'app-post-list',
  imports: [CommonModule, PostCardComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit{
  posts!: Post[];

  constructor(private postService: PostServiceService ) {
    this.posts = [];
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (data: any) => {
        this.posts = data.reverse();
      },
      (error: any) => {
        console.error('An error occurred:', error);
      }
    );
  }
}
