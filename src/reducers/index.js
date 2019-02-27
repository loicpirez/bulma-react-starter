const reducer = (state = {
  loading: false,
  error: '',
  apiResponse: ''
}, action) => {
  switch (action.type) {
    case 'GET_API':
      return { ...state, apiResponse: '', loading: true, error: '' }
    case 'API_RESULT_RECEIVED':
      return { ...state, apiResponse: action.json[0], loading: false, error: '' }
    case 'API_REQUEST_FAILED':
      return { ...state, apiResponse: '', loading: false, error: action.error }
    default:
      return state
  }
}

export default reducer
