
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import { CoreModule } from './core/core.module';
import { ClientTearSheetComponent } from './client-tear-sheet/client-tear-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientTearSheetComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
