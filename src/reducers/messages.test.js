import { messages } from './messages';

describe('messages reducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = messages(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return the state when SUBMIT_MESSAGE is the type', () => {
    const expected = [{
      message: 'puhlease',
      isUser: true
    }];
    const mockAction = {
      type: 'SUBMIT_MESSAGE',
      message: 'puhlease',
      isUser: true
    };
    const result = messages([], mockAction);
    expect(result).toEqual(expected);
  });

  it('should return the state when DELETE_MESSAGES is the type', () => {
    const expected = [];
    const initialState = [{
      message: 'puhlease',
      isUser: true
    }];
    const mockAction = {
      type: 'DELETE_MESSAGES'
    }
    const result = messages(initialState, mockAction);
    expect(result).toEqual(expected);
  })
});