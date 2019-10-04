import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  formularioPost : FormGroup;
  errores: any;
  constructor(private postService: PostService, private router: Router    ) { 
    this.formularioPost = new FormGroup({
      imagen: new FormControl(''),
      titulo: new FormControl(''),
      descripcion: new FormControl(''),
      contenido: new FormControl(''),
      fecha: new FormControl(''),
      categoria: new FormControl(),
      autor: new FormControl()
    })
    this.errores =[];
  }

  ngOnInit() {
  }
  async enviarDatos(values){
    console.log(this.formularioPost.value);
    try{
      let respuesta = await this.postService.create(this.formularioPost.value);
      console.log('usuario creado')
      this.router.navigate(['/']);
      
    }catch(err){
      this.errores = err.error;
    }
    
  }

}
