import {types} from './../../actions/types';
import postReducers from './reducer';

describe('Posts Reducer', () => {
    it('Should return default state', () => {
        const newState = postReducers(undefined,{});
        expect(newState).toEqual([]);
    });

    it('Should return new State if receiving new type' , () => {
        const posts = [{title : 'test 1'},{title : 'test 1'},{title : 'test 1'}];
        const newState = postReducers(undefined,{type : types.GET_POSTS, payload : posts});
        expect(newState).toEqual(posts);
    });
});