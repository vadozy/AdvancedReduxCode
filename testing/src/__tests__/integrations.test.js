import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [
            {name: 'comment 1'},
            {name: 'comment 2'},
            {name: 'comment 3'}
        ]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list or comments and display them', done => {
    // Attempt to render the *entire* app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    // find the 'fetchComments' button and click it
    wrapped.find('.fetch-comments').simulate('click');

    // Introduce a pause

    // Expect to find a list of comments
    console.log(`Actual count of comments: ${wrapped.find('li').length}`);
    moxios.wait(() => {
        wrapped.update();
        console.log(`After Timeout Actual count of comments: ${wrapped.find('li').length}`);
        expect(wrapped.find('li')).toHaveLength(3);
        wrapped.unmount();
        done();
    });

});
