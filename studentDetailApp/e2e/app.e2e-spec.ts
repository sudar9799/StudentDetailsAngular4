import { MyPollAppPage } from './app.po';

describe('my-poll-app App', () => {
  let page: MyPollAppPage;

  beforeEach(() => {
    page = new MyPollAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
