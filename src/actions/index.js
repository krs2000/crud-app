import { SET_USERS, DELETE_USER, ADD_USER , EDIT_USER} from "../constants";
import axios from "axios";
import { endpoint } from "../api.js";


//Niestety nie dążyłem poprawnie zitegrować zapytań modyfikujących z api // gdyby API naprawdę działało inaczaj przygotowałbym reducery

export const set_users=()=> {
	return (dispatch, getState) => {
		axios.get(endpoint).then(
			response => {
				dispatch({
					type: SET_USERS,
					payload: response.data
				});
			},
			error => {
				console.log("axios error")
			}
		);
	};
}

export const delete_user = (id, oldUsers) => {
	// axios.delete(`https://jsonplaceholder.typicode.com/users/`+id); 
	const action = {
		type: DELETE_USER,
		id,
		oldUsers
	};
	return action;
};

export function add_user(newUser, oldUsers) {
	// axios.post(`https://jsonplaceholder.com/users/`,newUser); 
	const action = {
		type: ADD_USER,
		oldUsers,
		newUser
	};
	return action;
}

export function edit_user(userEdited) {
	// axios.put(`https://jsonplaceholder.com/users/`+id); 
	const action = {
		type: EDIT_USER,
		userEdited
	};
	return action;
}
