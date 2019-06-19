import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Index3RoutingModule } from './index3-routing.module';
import { ComponentModule } from './../../component/component.module';

import { Index3Component } from './index3.component';

@NgModule({
  declarations: [
    Index3Component
  ],
  imports: [
    CommonModule,
    Index3RoutingModule,
    ComponentModule
  ],
  exports: [
    Index3Component
  ]
})
export class Index3Module { }
