import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post.model'

@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.css']
  
})
export class PostListsComponent implements OnInit {
  arrPosts: Post[] ;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.descargarPosts();
    /*this.postService.getAllPosts().then( response => {
      this.arrPosts = response;
      console.log(this.arrPosts)
    })*/
  }
  mostrarComentario(id) {
    let ocultoContenido = document.getElementById(id);
    if (ocultoContenido.style.display === "none" || ocultoContenido.style.display === "" ) {
        ocultoContenido.style.display = "block";
    } else {
        ocultoContenido.style.display = "none";
    }
  }
  descargarPosts(){
    this.postService.getAllPosts().then( response => {
      this.arrPosts = response;
    })
  }
  eliminarPost(PostId){
    this.postService.deletePost(Post).then( response => {
      console.log(response);
      this.descargarPosts();
    })
  }
  

}
