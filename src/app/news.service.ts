import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const API_KEY = environment.apiKey;
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  currentArticle: any;
  constructor(private http: HttpClient) { }

  getNews(url) {
     return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
  }
}
