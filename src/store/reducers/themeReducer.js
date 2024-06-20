const initialState = {
    isLight: true
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME': {
            return {
                isLight: !state.isLight
            };
        }
        default: return state;
    }
}

export default themeReducer;
