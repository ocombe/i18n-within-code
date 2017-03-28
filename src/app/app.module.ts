import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {I18nDef, I18nService} from "app/i18n";
import {I18N_DEFS, MyI18nDefs} from "./i18n.defs";
import {ExternalLibModule} from "./external-lib/external-lib.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // ExternalLibModule
  ],
  providers: [
    // this would be auto provided by Angular, we add it here to make it working for now
    MyI18nDefs,
    {provide: I18nService, useValue: I18nService}
  ],

  translations: [
     MyI18nDefs,
     I18N_DEFS
   ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
