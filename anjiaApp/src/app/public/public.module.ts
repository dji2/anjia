import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TestListItemComponent} from './house-list-item/test-list-item.component';


@NgModule({
  declarations: [
    TestListItemComponent
  ],
  imports: [
    BrowserModule,

  ],
  exports:[TestListItemComponent],
  providers: [],
  bootstrap: [],

})
export class PublicModule { }
