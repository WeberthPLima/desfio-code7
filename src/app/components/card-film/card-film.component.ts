import { Component, Input, OnInit } from '@angular/core';
import { Films } from 'src/app/shared/models';

@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.scss']
})
export class CardFilmComponent implements OnInit {
  @Input() data: Films = {
    Title: '',
    Year: '',
    imdbID: '',
    Type: '',
    Poster: '',
  };
  constructor() { }

  ngOnInit(): void {
  }

  handleError(image: any) {
    image.onerror = "";
    image.src = "/img/img-default.png";
    return true;
  }

}
