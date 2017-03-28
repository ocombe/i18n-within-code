import {Component} from '@angular/core';
import {MyI18nDefs, I18N_DEFS} from "app/i18n.defs";
import {I18nService} from "app/i18n";
import {EXTERNAL_DEFS} from "./external-lib/external-lib-i18n-defs";

@Component({
  selector: 'app-root',
  template: `
    <p>{{title}}</p>
    <p>{{objectDefs}}</p>
    <p>{{externalLib}}</p>
    <p>{{msgWithParams}}</p>
    <p>{{otherMsgWithParams}}</p>
  `,
})
export class AppComponent {
  classDefs = this.__(this.defs.title);
  objectDefs = this.__(I18N_DEFS.title);
  externalLib = this.__(EXTERNAL_DEFS.libDef);

  // message with parameters
  msgWithParams = this.__(this.defs.msgWithParams, {someParam: 'some param', otherParam: 'some other param'});
  // also works with numeric params
  otherMsgWithParams = this.__(this.defs.otherMsgWithParams, ['some param', 'some other param']);

  constructor(public defs: MyI18nDefs, public __: I18nService) {
  }
}
