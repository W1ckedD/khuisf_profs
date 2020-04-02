import createDataContext from './createDataContext';
import axios from 'axios';
import { AsyncStorage } from 'react-native';

const profReducer = (state, action) => {
    switch (action.type) {
        case 'GET_DOWNLOAD_LIST_BY_ID':
            return { ...state, downloadList: action.payload, errorMessage: '' };
        case 'GET_PROF_BY_ID':
            return { ...state, prof: action.payload, errorMessage: '' };
        case 'GET_ALL_PROFS':
            return { ...state, profs: action.payload, errorMessage: '' };
        case 'ADD_ERROR':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

const getAllProfs = dispatch => async () => {
    try {
        const ip = await AsyncStorage.getItem('ip');
        const res = await axios.get(`http://${ip}:5000/profs`);
        dispatch({ type: 'GET_ALL_PROFS', payload: res.data.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something wnt wrong' });
    }
};

const getProfById = dispatch => async ({ id }) => {
    try {
        const ip = await AsyncStorage.getItem('ip');
        const res = await axios.get(`http://${ip}:5000/profs/${id}`);
        dispatch({ type: 'GET_PROF_BY_ID', payload: res.data.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something wnt wrong' });
    }
};

const getDownloadListById = dispatch => async ({ id }) => {
    try {
        const ip = await AsyncStorage.getItem('ip');
        const res = await axios({
            url: `http://${ip}:5000/download`,
            method: 'GET',
            params: { profId: id }
        });
        console.log(res.data.data)

        dispatch({ type: 'GET_DOWNLOAD_LIST_BY_ID', payload: res.data.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something wnt wrong' });
    }
};

export const { Context, Provider } = createDataContext(
    profReducer,
    { getAllProfs, getProfById, getDownloadListById },
    { profs: [], prof: null, downloadList: [], errorMessage: '' }
);
