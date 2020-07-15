export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";


export const requestApiData = value =>({
    type: REQUEST_API_DATA, 
    value 
});
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });
