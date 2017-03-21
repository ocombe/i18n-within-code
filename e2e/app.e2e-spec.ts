import { I18nWithinCodePage } from './app.po';

describe('i18n-within-code App', () => {
  let page: I18nWithinCodePage;

  beforeEach(() => {
    page = new I18nWithinCodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
