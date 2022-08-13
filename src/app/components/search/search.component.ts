import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { FilmesServices } from 'src/app/services/films/films.service';
import { Films } from 'src/app/shared/models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public initSearch = false;
  public loading = false;
  public error = false;
  public totalResults = 0;
  public page = 1;
  public data: Films[] = [];
  public formSearch: FormGroup = new FormGroup({
    search: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(private filmesService: FilmesServices) { }

  getFilms(page: number = 1): void {
    this.initSearch = true;
    this.loading = true;
    this.error = false;
    this.page = page;

    this.filmesService
      .getFilmes(this.formSearch.value.search, page)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        (data) => {
          if(data.error || (!data.Search || data.Search.length === 0)) {
            this.error = true;
          } else {
            this.data = data.Search;
            this.totalResults = data.totalResults;
          }
        },
        () => {
          this.error = true;
        }
      );
  }

}
