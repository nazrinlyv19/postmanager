import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [];

  constructor() {}

  getPosts(): Post[] {
    return this.posts;
  }

  addPost(post: Post): void {
    post.id = Date.now();
    this.posts.push(post);
  }

  deletePost(id: number): void {
    this.posts = this.posts.filter((post) => post.id !== id);
  }

  updatePost(updatedPost: Post) {
    this.posts = this.posts.map((post) => {
      if (post.id === updatedPost.id) {
        post = updatedPost;
      }
      return post;
    });
  }
}
