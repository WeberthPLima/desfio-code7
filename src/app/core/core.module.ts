import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    ComponentsModule,
  ],
  exports: [
    MainLayoutComponent,
  ],
})
export class CoreModule {}
