import { SitiosTuristicosPage } from './app.po';

describe('sitios-turisticos App', function() {
  let page: SitiosTuristicosPage;

  beforeEach(() => {
    page = new SitiosTuristicosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
