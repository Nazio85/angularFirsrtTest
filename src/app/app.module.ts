import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserComponent} from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {HoverDirective} from './user/hover.derective';

@NgModule({
  declarations: [
    AppComponent, UserComponent, HoverDirective
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
