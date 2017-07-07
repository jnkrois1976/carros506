import { Carros506Page } from './app.po';

describe('carros506 App', () => {
  let page: Carros506Page;

  beforeEach(() => {
    page = new Carros506Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
