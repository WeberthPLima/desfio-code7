import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageSearchRoutingModule } from './page-search-routing.module';
import { PageSearchComponent } from './page-search.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    PageSearchComponent
  ],
  imports: [
    CommonModule,
    PageSearchRoutingModule,
    ComponentsModule
  ]
})
export class PageSearchModule { }
