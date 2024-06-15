
export const messages = state => {
  return state.messages;
}

export const message  = state => {
  return state.messages.find((currentValue, index, arr) => {
    return currentValue.key == state.current_params.message;
  }) || state.notFound;
}
