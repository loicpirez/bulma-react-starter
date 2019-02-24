const reducer = (state = {}, action) => {
  console.log(action)
  switch (action.type) {
    case 'GET_API':
      return { ...state, loading: true }
    case 'API_RESULT_RECEIVED':
      return { ...state, api_response: action.json[0], loading: false }
    default:
      return state
  }
}

export default reducer
