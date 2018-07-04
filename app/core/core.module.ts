
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  PubSubService,
  ApplicationDataService,
  ApplicationService,
  HttpService,
  SearchDataService,
  } from './index';

  const CORE_PROVIDERS = [
    PubSubService,
    ApplicationDataService,
    ApplicationService,
    HttpService,
    SearchDataService,
  ];


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [...CORE_PROVIDERS]

})
export class CoreModule { }
