import { JobifyPage } from './app.po';

describe('jobify App', () => {
  let page: JobifyPage;

  beforeEach(() => {
    page = new JobifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
