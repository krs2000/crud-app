import { SET_USERS, DELETE_USER, ADD_USER, EDIT_USER } from "../constants";

let initialState = {
    users: []
};

export default (state = initialState, action) => {
    let id = null;
    let oldUsers = null;
    let newState = null;
    switch (action.type) {
        case SET_USERS:
            newState = {
                users: action.payload,
            };
            return newState;
        case DELETE_USER:
            id = action.id;
            oldUsers = action.oldUsers
            newState = {
                users: oldUsers.filter(user => user.id !== id)
            };
            return newState;
        case ADD_USER:
            const { newUser } = action;
            oldUsers = action.oldUsers;
            newState = {
                users: oldUsers.concat(newUser)
            };
            return newState;
        case EDIT_USER:
            oldUsers = action.userEdited;
            newState = {
                users: oldUsers
            };
            return newState;
        default:
            return state;
    }
};