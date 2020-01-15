import * as actions from './index';

describe('actions testing', () => {
  it('should have a type of SUBMIT_MESSAGE', () => {
    const message = "HALP";
    const expectedAction = {
      type: 'SUBMIT_MESSAGE',
      message: "HALP",
      isUser: true
    };
    const result = actions.submitMessage(message, true);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of DELETE_MESSAGES', () => {
    const expectedAction = {
      type: 'DELETE_MESSAGES'
    };
    const result = actions.deleteMessages();
    expect(result).toEqual(expectedAction);
  });
});

