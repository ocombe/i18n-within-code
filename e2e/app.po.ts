import { browser, element, by } from 'protractor';

export class I18nWithinCodePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
