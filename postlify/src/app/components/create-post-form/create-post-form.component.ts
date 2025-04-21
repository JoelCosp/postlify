import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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

  constructor()
  {
    this.title = new FormControl('', Validators.required);
    this.description = new FormControl('', [Validators.required, Validators.maxLength(500)]);
    this.img = new FormControl('', Validators.required);
    
    this.postForm = new FormGroup({
      title: this.title,
      description: this.description,
      img: this.img
    })
  }

  handleSubmit(): void {
    console.log(this.postForm.value);
    this.postForm.reset();
  }
}
