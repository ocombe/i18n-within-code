import { Component, Inject } from '@angular/core';
import { MyI18nDefs, MyOtherI18nDefs } from "app/i18n.defs";
import { I18nDef } from "app/i18n";
import { I18nDefs, I18nService } from "app/i18n";

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
  // using the class
  title = this.i18n.title;
  // using the token
  test = this.i18nAny.test;
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
    public i18n: MyI18nDefs,
    @Inject(I18nDefs) public i18nAny: MyI18nDefs & MyOtherI18nDefs,
    public __: I18nService
  ) { }
}
