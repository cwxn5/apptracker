import {fireStore} from "../firebase/firebase";

export const createSettings = formValues => async (dispatch, getState) => {
  const userId = getState().auth.user.uid;
  fireStore
    .collection("users")
    .doc(`${userId}`)
    .collection("settings")
    .doc("settings")
    .set({ ...formValues })
    .then(() => {
      console.log("successful create", formValues);
      dispatch({
        type: "CREATE_SETTINGS",
        payload: formValues
      });
    })
    .catch(error => {
      console.log("error", error);
    });
};
export const fetchSettings = () => async (dispatch, getState) => {
  const userId = getState().auth.user.uid;
  fireStore
    .collection("users")
    .doc(`${userId}`)
    .collection("settings")
    .doc("settings")
    .get()
    .then(function(doc) {
      if (doc.exists) {
        dispatch({
          type: "FETCH_SETTINGS",
          payload: doc.data()
        });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(error => {
      console.log("error", error);
    });
};
