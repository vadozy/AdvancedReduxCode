import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    };

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );

});

afterEach(() => {
    wrapped.unmount();
});

it('creates one LI per comment', () => {
    expect(wrapped.find('li')).toHaveLength(2);
});

it('shows the text for each comment', () => {
    // Not recommended by enzyme doc, but works
    expect(wrapped.text()).toContain("Comment 1");
    expect(wrapped.text()).toContain("Comment 2");

    // Recommended by enzyme doc
    //console.log(wrapped.render().text());
    expect(wrapped.render().text()).toContain("Comment 1");
    expect(wrapped.render().text()).toContain("Comment 2");

});
