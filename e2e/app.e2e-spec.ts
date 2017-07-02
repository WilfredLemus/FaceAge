import { FaceAgePage } from './app.po';

describe('face-age App', () => {
  let page: FaceAgePage;

  beforeEach(() => {
    page = new FaceAgePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
