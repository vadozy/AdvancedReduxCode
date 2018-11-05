import tv4 from 'tv4';
import stateSchema from './stateSchema';

export default store => next => action => {
    const result = next(action);
    
    const state = store.getState();
    const valid = tv4.validate(state, stateSchema);
    if (!valid) {
        console.warn("The state is not valid");
    }

    return result;
};
