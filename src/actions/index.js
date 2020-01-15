export const createUser = user => ({
  type: 'CREATE_USER',
  user
});

export const removeUser = () => ({
  type: 'REMOVE_USER'
});

export const hasErrored = errorMsg => ({
  type: 'HAS_ERRORED',
  errorMsg
})

export const submitMessage = (message, isUser) => ({
  type: 'SUBMIT_MESSAGE',
  message,
  isUser
})

export const deleteMessages = () => ({
  type: 'DELETE_MESSAGES'
})