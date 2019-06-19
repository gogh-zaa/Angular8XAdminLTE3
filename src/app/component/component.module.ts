import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    ContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SideBarComponent,
    ContentComponent
  ]
})
export class ComponentModule { }
