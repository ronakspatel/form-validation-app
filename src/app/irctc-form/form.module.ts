import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import { FormComponent } from './form.component';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [FormComponent],
  exports:[FormComponent]
})
export class FormModule { }
