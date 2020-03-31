import createDataContext from './createDataContext';

const navReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_DRAWER':
            return { ...state, isDrawerOpen: !state.isDrawerOpen };
        default:
            return state;
    }
};

const toggleDrawer = dispatch => () => {
    dispatch({ type: 'TOGGLE_DRAWER', payload: null });
};

export const { Context, Provider } = createDataContext(
    navReducer,
    { toggleDrawer },
    { isDrawerOpen: false }
);
