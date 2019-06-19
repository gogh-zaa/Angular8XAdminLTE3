import { ComponentModule } from './component/component.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Index1Module } from './state/index1/index1.module';
import { Index2Module } from './state/index2/index2.module';
import { Index3Module } from './state/index3/index3.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    Index1Module,
    Index2Module,
    Index3Module,

    ComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
