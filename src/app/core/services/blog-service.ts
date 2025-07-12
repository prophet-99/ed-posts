import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { type BlogPost } from '@/core/models/blog-post.model';
import { environment } from '@/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private httpClient = inject(HttpClient);
  private baseUrl = `${environment.baseURL}/blog`;

  getPostBySlug(slug: string): Observable<BlogPost> {
    return this.httpClient.get<BlogPost>(`${this.baseUrl}/${slug}`);
  }

  getPostIds(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.baseUrl}/ids`);
  }
}
