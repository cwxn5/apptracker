import { database } from "../firebase/firebase";
import * as AWS from 'aws-sdk'

import config from '../config/aws'

AWS.config.update(config)

const docClient = new AWS.DynamoDB.DocumentClient()

export const createApplicationGroup = (applicationGroupName) => async (dispatch, getState) => {
  try {
    const userId = getState().auth.user.uid;
    const params = {
      TableName: "application_groups",
      Item: {
        name: applicationGroupName,
        userid: userId,
        isDefault: false
      }
    };
    docClient.put(params, function (err, data) {
      if (err) {
        console.error("Can't add application group: ", err);
      } else {
        console.log("Succeeded adding an application group: ", data);
        dispatch({
          type: "CREATE_APPLICATION_GROUP",
          payload: applicationGroupName,
        });
      }
    });
  } catch (e) {
    console.log("application group create error: ", e);
  }
};
export const deleteApplicationGroup = (docId) => async (dispatch, getState) => {
  try {
    const userId = getState().auth.user.uid;
    const applicationToDeleteRef = database.ref(
      `users/${userId}/application-groups/${docId}`
    );
    await applicationToDeleteRef.remove();
    dispatch({
      type: "DELETE_APPLICATION_GROUP",
      id: docId,
    });
  } catch (e) {
    console.log("application group delete error: ", e);
  }
};
export const editApplicationGroup =
  (formValues, docId) => async (dispatch, getState) => {
    try {
      const userId = getState().auth.user.uid;
      const applicationToUpdateRef = database.ref(
        `users/${userId}/application-groups/${docId}`
      );
      applicationToUpdateRef.update(formValues);
      dispatch({
        type: "EDIT_APPLICATION_GROUP",
        payload: formValues,
        id: docId,
      });
    } catch (e) {
      console.error("edit application group error: ", e);
    }
  };

export const fetchApplicationGroups = () => async (dispatch, getState) => {
  const userId = getState().auth?.user?.uid;
  if (userId) {
    let userRef = database.ref("users");
    userRef
      .child(userId)
      .child("application-groups")
      .get()
      .then(function (applicationGroups) {
        if (applicationGroups.exists()) {
          dispatch({
            type: "FETCH_APPLICATION_GROUPS",
            payload: applicationGroups.val(),
          });
        } else {
          console.log("no data");
          dispatch({
            type: "FETCH_APPLICATION_GROUPS",
            payload: {},
          });
        }
      })
      .catch(function (error) {
        console.error("error: ", error);
      });
  }
};