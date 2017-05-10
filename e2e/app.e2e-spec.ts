import { DirecoryPage } from './app.po';

describe('direcory App', function() {
  let page: DirecoryPage;

  beforeEach(() => {
    page = new DirecoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
