import moxios from 'moxios';
import { testStore} from './../../Utils';
import {fetchPosts} from './../actions';

describe('fecthPosts action' ,() => {
    beforeEach(() => {
        moxios.install();  //moxios instance is created so that it should not go to the internet and generates a API call.
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('store is updated correctly' ,() => {
        const expectedState = [
            {
                title : 'Example Tile 1',
                body : 'Some Text'
            },
            {
                title : 'Example Tile 2',
                body : 'Some Text'
            },
            {
                title : 'Example Tile 3',
                body : 'Some Text'
            }
        ];
        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status : 200,
                response : expectedState
            })
        });
        return store.dispatch(fetchPosts()).then(() => {
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState);
        });
    })
})