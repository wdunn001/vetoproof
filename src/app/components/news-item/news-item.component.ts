import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input()
  title = 'Post Title';
  @Input()
  imagePosition: 'top' | 'bottom' = 'top';
  @Input()
  imageSource: string;

  @Input()
  social = true;
  constructor() {}

  ngOnInit() {}
}
