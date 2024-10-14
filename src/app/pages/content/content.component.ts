import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input()
  imageCover: string = 'https://www.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png'
  @Input()
  contentTitle: string = 'Nova Notícia'
  @Input()
  contentDescription: string = 'Bla bla bla bla bla'
}
