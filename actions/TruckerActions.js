import {
	FETCHING_DATA,
	FETCHING_DATA_SUCCESS,
	FETCHING_DATA_FAILURE
} from './types';

import Colors from '../constants/Colors';
import { INITIAL_STATE } from '../reducers/TruckerReducer';


export const toggleProfileState = (activate) => {
	if (activate === true){
		return {
			type: FETCHING_DATA,
			payload: false
		};
	}
	return {
		type: FETCHING_DATA,
		payload: true
	};
}
