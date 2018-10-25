import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule } from '../irctc-form/form.module';
import { FormService } from './form.service';

@NgModule({
  imports: [
    CommonModule,FormModule,FormModule
  ],
  declarations: [],
  exports:[FormModule],
  providers:[FormService]

})
export class CoreModule { }
