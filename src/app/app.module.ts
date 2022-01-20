import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer.component';
import { RouterModule } from '@angular/router';
import {TemplateDrivenFormComponent} from './template-driven-form/template-driven-form.component'

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    TemplateDrivenFormComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'templateDrivenForm',component:TemplateDrivenFormComponent}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 