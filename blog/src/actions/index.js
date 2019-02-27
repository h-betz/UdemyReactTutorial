import jsonPlaceholder from '../apis/jsonPlaceholder';

//Function that returns a function
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({type: 'FETCH_POSTS', payload: response})
};