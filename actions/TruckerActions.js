import {
	FETCHING_DATA,
	FETCHING_DATA_SUCCESS,
	FETCHING_DATA_FAILURE
} from './types';

import axios from 'axios';


export function getData() {
  return {
    type: FETCHING_DATA
  }
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE
  }
}

export function fetchData() {
  return (dispatch) => {
    dispatch(getData())
    axios.get("https://gist.githubusercontent.com/bgdavidx/9458ff3ae6054a28e0a636367ff77bbf/raw/990adb44389595174da8fc5ec890045e0db66495/gistfile1.txt")
      .then((response) => {
        dispatch(getDataSuccess(response.data))
      })
	  .catch((err) => {
		dispatch(getDataFailure())
	  })
  }
}
