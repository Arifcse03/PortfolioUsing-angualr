import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpericenceRoutingModule } from './expericence-routing.module';
import { ExpericenceComponent } from './expericence.component';


@NgModule({
  declarations: [
    ExpericenceComponent
  ],
  imports: [
    CommonModule,
    ExpericenceRoutingModule
  ]
})
export class ExpericenceModule { }
