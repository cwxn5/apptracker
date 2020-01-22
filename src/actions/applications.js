import database from "../firebase/firebase";

export const createApplication = formValues => async (dispatch, getState) => {
  const userId = getState().auth.user.uid;
  const docId = Date.now().toString();
  database
    .collection("users")
    .doc(`${userId}`)
    .collection("applications")
    .doc(docId)
    .set(formValues)
    .then(() => {
      console.log("successful create", formValues);
      dispatch({
        type: "CREATE_APPLICATION",
        payload: formValues,
        id: docId
      });
    })
    .catch(error => {
      console.log("error", error);
    });
};
export const deleteApplication = docId => async (dispatch, getState) => {
  const userId = getState().auth.user.uid;
  database
    .collection("users")
    .doc(`${userId}`)
    .collection("applications")
    .doc(docId)
    .delete()
    .then(() => {
      console.log("successful delete");
      dispatch({
        type: "DELETE_APPLICATION",
        id: docId
      });
    })
    .catch(error => {
      console.log("error", error);
    });
};
export const editApplication = (formValues, docId) => async (
  dispatch,
  getState
) => {
  const userId = getState().auth.user.uid;
  database
    .collection("users")
    .doc(`${userId}`)
    .collection("applications")
    .doc(docId)
    .update(formValues)
    .then(() => {
      console.log("successful edit", formValues);
      dispatch({
        type: "EDIT_APPLICATION",
        payload: formValues,
        id: docId
      });
    })
    .catch(error => {
      console.log("error", error);
    });
};
export const moveApplication = (status, docId) => async (
  dispatch,
  getState
) => {
  const userId = getState().auth.user.uid;
  let appRef = database
    .collection("users")
    .doc(`${userId}`)
    .collection("applications")
    .doc(docId);

  appRef
    .update({ status })
    .then(doc => {
      console.log("successful move to", status);
      dispatch({
        type: "MOVE_APPLICATION",
        payload: status,
        id: docId
      });
    })
    .catch(error => {
      console.log("error", error);
    });
};
export const fetchApplications = () => async (dispatch, getState) => {
  const userId = getState().auth.user.uid;
  let applications = {};
  var userApps = database
    .collection("users")
    .doc(`${userId}`)
    .collection("applications");

  userApps
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        applications[doc.id] = doc.data();
      });
      dispatch({
        type: "FETCH_APPLICATIONS",
        payload: applications
      });
    })
    .catch(error => {
      console.log("error", error);
    });
};
