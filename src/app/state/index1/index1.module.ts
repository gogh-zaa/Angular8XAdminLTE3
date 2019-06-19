import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Index1RoutingModule } from './index1-routing.module';

import { Index1Component } from './index1.component';

@NgModule({
  declarations: [
    Index1Component
  ],
  imports: [
    CommonModule,
    Index1RoutingModule
  ],
  exports: [
    Index1Component
  ]
})
export class Index1Module { }
