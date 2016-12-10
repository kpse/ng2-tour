import { Ng2TourPage } from './app.po';

describe('ng2-tour App', function() {
  let page: Ng2TourPage;

  beforeEach(() => {
    page = new Ng2TourPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
