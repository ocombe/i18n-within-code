import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyI18nDefs, MyOtherI18nDefs } from "app/i18n.defs";
import { I18_DEFS, I18nService } from "app/i18n";

export function mixingI18nDefs(...defs: any[]) {
  const mixedDefs = {};
  defs.forEach((def: any) => {
    Object.getOwnPropertyNames(def).forEach((name: string) => {
      mixedDefs[name] = def[name];
    });
  });
  return mixedDefs;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    /* start of temp stuff */
    // this would be auto provided by Angular, we add it here to make it working for now
    MyI18nDefs,
    MyOtherI18nDefs,
    {
      provide: I18nService,
      useValue: I18nService
    }, {
      provide: I18_DEFS,
      useFactory: mixingI18nDefs,
      deps: [MyI18nDefs, MyOtherI18nDefs]
    }],
    /* end of temp stuff */

   // /!\ this is commented because typescript will throw an error otherwise since this property doesn't exist yet
   // we concatenate the defs in an unique token, the developer can use intersection types to have auto completion
   /*translations: [
     './i18n.defs#MyI18nDefs',
     './i18n.defs#MyOtherI18nDefs'
   ],*/
  bootstrap: [AppComponent]
})
export class AppModule { }
