import { database, fireStore } from "../firebase/firebase";

export const createApplication = (formValues) => async (dispatch, getState) => {
  const userId = getState().auth.user.uid;
  const applicationsRef = database.ref(`users/${userId}/applications`);
  const newApplicationRef = await applicationsRef.push();
  await newApplicationRef.set(formValues);
  dispatch({
    type: "CREATE_APPLICATION",
    payload: formValues,
    id: newApplicationRef.key,
  });
};
export const deleteApplication = (docId) => async (dispatch, getState) => {
  try {
    const userId = getState().auth.user.uid;
    const applicationToDeleteRef = database.ref(
      `users/${userId}/applications/${docId}`
    );
    await applicationToDeleteRef.remove();
    dispatch({
      type: "DELETE_APPLICATION",
      id: docId,
    });
  } catch (e) {
    console.log("application delete error: ", e);
  }
};
export const editApplication = (formValues, docId) => async (
  dispatch,
  getState
) => {
  try {
    const userId = getState().auth.user.uid;
    const applicationToUpdateRef = database.ref(
      `users/${userId}/applications/${docId}`
    );
    applicationToUpdateRef.update(formValues);
    dispatch({
      type: "EDIT_APPLICATION",
      payload: formValues,
      id: docId,
    });
  } catch (e) {
    console.error("edit application error: ", e);
  }
};

export const fetchApplications = () => async (dispatch, getState) => {
  const userId = getState().auth.user.uid;
  let userRef = database.ref("users");
  userRef
    .child(userId)
    .child("applications")
    .get()
    .then(function (applications) {
      if (applications.exists()) {
        dispatch({
          type: "FETCH_APPLICATIONS",
          payload: applications.val(),
        });
      } else {
        console.log("no data");
      }
    })
    .catch(function (error) {
      console.error("error: ", error);
    });
};
