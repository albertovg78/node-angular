import { Injectable } from '@angular/core';
import { Post } from './models/post.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  urlListPosts: string;
  constructor(private http: HttpClient) { 
    this.urlListPosts= 'http://localhost:3000/api/posts';
  }
  getAllPosts(): Promise<Post[]>{
    return this.http.get<Post[]>(this.urlListPosts).toPromise();
  }
  

  create(values): Promise<Post>{
    return this.http.post<Post>(this.urlListPosts, values).toPromise();
  }
  deletePost(post): Promise<Post>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: {
        postId: post._id
      }
    };
    return this.http.delete<Post>(this.urlListPosts, httpOptions).toPromise();

  }
  updatedPost(postId, values): Promise<Post>{
    values.postId = postId;
    return this.http.put<Post>(this.urlListPosts, postId).toPromise();
  }
  getOnePost(postId): Promise<Post>{
    return this.http.get<Post>(this.urlListPosts+'/'+postId).toPromise();
  }
  
}
