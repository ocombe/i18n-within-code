import { Component, Inject } from '@angular/core';
import { MyI18nDefs, MyOtherI18nDefs } from "app/i18n.defs";
import { I18nDef } from "app/i18n";
import { I18_DEFS, I18nService } from "app/i18n";

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <p>{{test}}</p>
    <p>{{msgWithParams}}</p>
    <p>{{otherMsgWithParams}}</p>
  `,
})
export class AppComponent {
  title = this.i18n.title;
  test = this.i18n.test;
  // message with parameters
  msgWithParams = this.__(this.i18n.msgWithParams, {someParam: 'some param', otherParam: 'some other param'});
  // also works with numeric params
  otherMsgWithParams = this.__(this.i18n.otherMsgWithParams, ['some param', 'some other param']);

  /**
   * Two possibilities
   * @param i18n we use a specific class definition, we get auto completion
   * @param i18nAny we use a token, we can aggregate multiple files in it
   * but we need to provide multiple types to get auto completion
   * and you have to use @Inject
   */
  constructor(
    @Inject(I18_DEFS) public i18n: MyI18nDefs & MyOtherI18nDefs,
    public __: I18nService
  ) { }
}
