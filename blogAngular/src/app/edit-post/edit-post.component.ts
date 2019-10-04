import { Component, OnInit } from '@angular/core';


import { Post } from '../models/post.model';
import { FormGroup, FormControl } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  formularioEdit: FormGroup
  entrada: Post
  identificador: string

  constructor(private postService: PostService,  private activatedRoute: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.identificador = params.identificador;
      console.log(this.identificador)
      this.postService.getOnePost(params.identificador).then( response => {
        this.entrada = response;
        this.formularioEdit = new FormGroup({
          id: new FormControl(this.entrada._id),
          fecha: new FormControl(this.entrada.fecha),
          imagen: new FormControl(this.entrada.imagen),
          titulo: new FormControl(this.entrada.titulo),
          descripcion: new FormControl(this.entrada.descripcion),
          contenido: new FormControl(this.entrada.contenido),
          categoria: new FormControl(this.entrada.categoria),
          autor: new FormControl(this.entrada.autor)
        })
      })
    })
  }
  enviarActualizacion(){
    console.log(this.formularioEdit.value)
    console.log(this.identificador)
    /*this.postService.updatedPost(this.identificador, this.formularioEdit.value).then( response => {
    
      this.router.navigate['/'];
    })*/
    this.postService.updatedPost(this.identificador, this.formularioEdit.value).then( response => {
      console.log(response)
      
      this.router.navigate(['/'])
    })
  }
  

}
