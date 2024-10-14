import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { mockedData } from '../../data/mockedData'

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {

  @Input()
  imageCover: string = ''
  @Input()
  cardTitle: string = ''
  @Input()
  id: string | null = '0'

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id"))
    this.setComponentValues(this.id)
  }
  ngOnInit(): void {
    this.setComponentValues(this.id)
    console.log(this.id)
  }

  setComponentValues(id: string | null) {
    const data = mockedData.filter(article => article.id.toString() == id)[0]
    if (id) {
      this.imageCover = data.imageCover
      this.cardTitle = data.title
    }
  }
}
