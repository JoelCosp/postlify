import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ReadPostComponent } from './pages/read-post/read-post.component';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"create-post", component: CreatePostComponent},
    {path:"read-post", component: ReadPostComponent},
];
