const name = 'sidebar'

const types = {
    TOGGLE: `TOGGLE_${name}`
}
const initialState = {
    open: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE: {
            return {
                ...state, open: !state.open
            }
        }
        default:
            return {
                state
            }
    }
}
export const toggle = () => dispatch => {
    dispatch({type: types.TOGGLE});
}