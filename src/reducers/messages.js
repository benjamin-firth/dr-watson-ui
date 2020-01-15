export const messages = (state = [], action) => {
  switch(action.type) {
    case 'SUBMIT_MESSAGE':
      return [...state, { 
        message: action.message, 
        isUser: action.isUser 
      }];
    case 'DELETE_MESSAGES':
      return [];
    default:
      return state;
  }
}