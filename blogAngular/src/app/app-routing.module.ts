import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListsComponent } from './post-lists/post-lists.component';
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';



const routes: Routes = [
  { path: '', component: PostListsComponent, pathMatch: 'full'},
  { path: 'new', component: NewPostComponent},
  { path: 'edit/:identificador', component: EditPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
