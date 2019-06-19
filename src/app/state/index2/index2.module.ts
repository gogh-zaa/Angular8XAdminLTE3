import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Index2RoutingModule } from './index2-routing.module';

import { Index2Component } from './index2.component';

@NgModule({
  declarations: [
    Index2Component
  ],
  imports: [
    CommonModule,
    Index2RoutingModule
  ],
  exports: [
    Index2Component
  ]
})
export class Index2Module { }
