/*
export default function({ dispatch }) {
    return function(next) {
        return function(action) {

        }
    }
};
*/
export default ({ dispatch }) => next => action => {
    // Check to see if the action has a promise on its 'payload' property
    // if not, send it to the next middleware

    if (!action.payload || !action.payload.then) {
        return next(action);
    } 
    
    // We want to resolve the promise to resolve, get its data and then
    // create a new action with that data and dispatch it
    action.payload
        .then(res => {
            const newAction = {...action, payload: res};
            dispatch(newAction);
        })
        .catch(err => {
            console.error(`Something went wrong: ${err}`);
        });
};
