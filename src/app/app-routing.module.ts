import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { TodosListComponent } from './todos-list/todos-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
  { path: 'posts', component: PostsListComponent },
  { path: 'albums', component: AlbumsListComponent }, 
  { path: 'todos', component: TodosListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
