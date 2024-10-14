import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { mockedData } from '../../data/mockedData'

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  @Input()
  imageCover: string = ""
  @Input()
  contentTitle: string = ""
  @Input()
  contentDescription: string = ""
  private id: string | null = "0"
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id"))
    this.setComponentValues(this.id)
  }
  setComponentValues(id: string | null) {
    const data = mockedData.filter(article => article.id.toString() == id)[0]
    if(id){
    this.imageCover = data.imageCover
    this.contentDescription = data.description
    this.contentTitle = data.title
    }

  }
}
