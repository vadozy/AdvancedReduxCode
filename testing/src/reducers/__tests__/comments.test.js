import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Test Comment'
    }

    const newState = commentsReducer([], action)
    
    expect(newState.length).toEqual(1);
    expect(newState).toEqual(['New Test Comment']);
});

it('handles actions of unknown type', () => {
    const newState = commentsReducer([], {type: 'qweqweqwer'});
    expect(newState.length).toEqual(0);
});

