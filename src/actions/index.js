import { SET_USERS, DELETE_USER, ADD_USER , EDIT_USER} from "../constants";
import axios from "axios";
import { endpoint } from "../api.js";
import { ApiService } from "../service/api_service.js"


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
	ApiService.deleteUser(id);
	const action = {
		type: DELETE_USER,
		id,
		oldUsers
	};
	return action;
};

export function add_user(newUser, oldUsers) {
	ApiService.postUser(newUser);
	const action = {
		type: ADD_USER,
		oldUsers,
		newUser
	};
	return action;
}

export function edit_user(userEdited) {
	ApiService.updateUser(userEdited);
	const action = {
		type: EDIT_USER,
		userEdited
	};
	return action;
}
