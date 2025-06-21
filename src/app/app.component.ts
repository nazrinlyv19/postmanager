// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'blog-post-manager';
// }





import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  standalone:true,
  template: `<h2>Test gedir... Konsola bax 😎</h2>`,
})
export class AppComponent implements OnInit {
  constructor(private postService: PostService) {}

  ngOnInit() {
    // 1. Post əlavə edirik
    this.postService.addPost({
      id: 0, // ID sonradan servis tərəfindən təyin olunur
      title: 'Test Post',
      content: 'Bu test məzmundur',
      optionalData: 'Nümunə'
    });

    // 2. Bütün postları konsola yazırıq
    console.log('📦 Əlavə olunmuş postlar:', this.postService.getPosts());

    // 3. Postu yeniləyirik
    const oldPost = this.postService.getPosts()[0];
    const updatedPost: Post = {
      ...oldPost,
      content: 'Bu məzmun dəyişdirildi!'
    };
    this.postService.updatePost(updatedPost);

    console.log('✏️ Dəyişdirilmiş post:', this.postService.getPosts());

    // 4. Postu silirik
    this.postService.deletePost(oldPost.id);

    console.log('❌ Silinmiş vəziyyət:', this.postService.getPosts());
  }
}

