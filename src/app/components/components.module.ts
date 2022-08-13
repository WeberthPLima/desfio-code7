import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { CardFilmComponent } from './card-film/card-film.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent,
    FooterComponent,
    NavComponent,
    SearchComponent,
    LoadingComponent,
    CardFilmComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [HeaderComponent,
    FooterComponent,
    NavComponent,
    SearchComponent,
    LoadingComponent,
    CardFilmComponent,
    PaginationComponent
  ]
})
export class ComponentsModule { }
