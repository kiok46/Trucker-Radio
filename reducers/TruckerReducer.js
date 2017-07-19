import {
	FETCHING_DATA,
	FETCHING_DATA_SUCCESS,
	FETCHING_DATA_FAILURE
} from '../actions/types';

export const INITIAL_STATE = {
	default_value: true,
};

export default ( state=INITIAL_STATE, action ) => {
	switch (action.type) {
		case FETCHING_DATA:
		    return { ...state, default_value: action.payload};
		default:
			return state;

	}
};
