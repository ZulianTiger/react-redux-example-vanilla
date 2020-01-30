const initialState = {
    react: 0,
    angular: 0,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'VOTE_REACT':
            console.log('redux vote react');
            return Object.assign({}, state, {
                react: state.react + 1
            })
        case 'VOTE_ANGULAR':
            console.log('redux vote angular');
            return Object.assign({}, state, {
                angular: state.angular + 1
            })
        default:
            return state
    }
}