import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FilmesServices {
  constructor(private http: HttpClient) {}
  getFilmes(search: string, page: number): Observable<any> {
    return this.http.get(
      `${environment.api}?s=${search}&apikey=${environment.apiKey}&page=${page}`
    );
  }
}
