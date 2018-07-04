import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteDirective } from './auto-complete.directive';
import { FormHeaderComponent } from './touchpoint-form/form-header/form-header.component';
import { FormDetailsComponent } from './touchpoint-form/form-details/form-details.component';
import { FormFooterComponent } from './touchpoint-form/form-footer/form-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AutoCompleteDirective, FormHeaderComponent, FormDetailsComponent, FormFooterComponent]
})
export class TouchpointModule { }
