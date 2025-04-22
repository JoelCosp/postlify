import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostServiceService } from '../../services/post-service.service';
import { Post } from '../../models/Post';
@Component({
  selector: 'app-create-post-form',
  imports: [ReactiveFormsModule],
  templateUrl: './create-post-form.component.html',
  styleUrl: './create-post-form.component.css'
})
export class CreatePostFormComponent {
  postForm: FormGroup; // Esta variable representa el formulario (es el formulario)
  
  title: FormControl; // El FormControl representa los inputs
  description: FormControl;
  img: FormControl;
  hashtags: FormControl;

  constructor(private postService: PostServiceService)
  {
    this.title = new FormControl('', Validators.required);
    this.description = new FormControl('', [Validators.required, Validators.maxLength(500)]);
    this.img = new FormControl('', Validators.required);
    this.hashtags = new FormControl('', Validators.required);
    
    this.postForm = new FormGroup({
      title: this.title,
      description: this.description,
      img: this.img,
      hashtags: this.hashtags
    })
  }

  handleSubmit(): void {
    this.postService.createPost(this.postForm.value).subscribe(data => {
      alert("¡Post created succesfully!");
      this.postForm.reset();
    })
  }
}
