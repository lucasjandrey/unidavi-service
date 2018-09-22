import { NewsService } from '../news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  article;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.article = this.newsService.currentArticle;
  }
}
