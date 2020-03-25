import createDataContext from './createDataContext';
import axios from 'axios';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'SIGN_UP':
            return { ...state, token: action.payload, errorMessage: '' };
        case 'ADD_ERROR':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

const signup = dispatch => async ({ email, password }) => {
    try {
        const res = axios.post('/admin/create-admin', { email, password });
        console.log(res.data);
        dispatch({ type: 'SIGN_UP', payload: res.data.token });
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' });
    }
};

export const { Context, Provider } = createDataContext(
    authReducer,
    { signup },
    { token: null, errorMessage: '' }
);
