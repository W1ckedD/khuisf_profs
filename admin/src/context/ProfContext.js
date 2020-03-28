import createDataContext from './createDataContext';
import axios from 'axios';

const profReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_PROFS':
            return { ...state, profs: action.payload };
        default:
            return state;
    }
};

const getAllProfs = dispatch => async () => {
    try {
        const res = await axios.get('/profs');
        console.log(res.data);
    } catch (err) {}
};

export const { Context, Provider } = createDataContext(
    profReducer,
    { getAllProfs },
    { profs: [], prof: null, errorMessage: '' }
);
