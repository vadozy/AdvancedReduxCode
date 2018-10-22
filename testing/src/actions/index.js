import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export const saveComment = comment => {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
};

export const fetchComments = () => {
    const response = axios.get('https://jsonplaceholder.typicode.com/comments');
    //console.log(`typeof response ${typeof response}`);
    //console.log(`response instanceof Promise ${response instanceof Promise}`);
    return {
        type: FETCH_COMMENTS,
        payload: response
    }
};
