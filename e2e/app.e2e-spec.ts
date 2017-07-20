import { HirepPage } from './app.po';

describe('hirep App', () => {
  let page: HirepPage;

  beforeEach(() => {
    page = new HirepPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
