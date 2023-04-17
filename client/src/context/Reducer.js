import { LOGIN_STATES } from './Actions';

const Reducer = (state, action) => {
    switch (action.type) {
        case LOGIN_STATES.START:
            return {
                user: null,
                isFetching: true,
                error: false
            };

        case LOGIN_STATES.SUCCESS:
            return {
                user: action.paylad,
                isFetching: false,
                error: false
            };

        case LOGIN_STATES.FAILURE:
            return {
                user: null,
                isFetching: false,
                error: true
            };

        default:
            return state;

    }
}

export default Reducer;