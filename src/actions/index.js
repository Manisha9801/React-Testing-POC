import {types} from './types';
import axios from 'axios';

export const fetchPosts = () => async(dispatch) => {
    await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(response => {
        dispatch({
            type : types.GET_POSTS,
            payload : response.data
        });
    }).catch(errors => {
        console.log(errors);
    });
};