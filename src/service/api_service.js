import { endpoint } from "../api.js";
import axios from "axios";

export const ApiService = (() => {
  const deleteUser = id => {
    axios
      .delete(endpoint + id)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const postUser = newUser => {
    axios
      .post(endpoint, newUser)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const updateUser = userEdited => {
    axios
      .put(endpoint + userEdited.id, {
        name: userEdited.name,
        username: userEdited.username,
        email: userEdited.email

      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return {
    deleteUser,
    postUser,
    updateUser
  };
})();
