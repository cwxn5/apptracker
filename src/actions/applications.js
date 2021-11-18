import { database } from "../firebase/firebase";
import * as AWS from 'aws-sdk'
import { v4 as uuidv4 } from 'uuid';

import config from '../config/aws'

AWS.config.update(config);

const docClient = new AWS.DynamoDB.DocumentClient()

export const createApplication = (formValues) => async (dispatch, getState) => {
  const userId = getState().auth.user.uid;
  const params = {
    TableName: "applications",
    Item: {
      ...formValues,
      userid: userId,
      id: uuidv4(),
    }
  };
  docClient.put(params, function (err, data) {
    if (err) {
      console.error("Can't add item: ", err);
    } else {
      dispatch({
        type: "CREATE_APPLICATION",
        payload: params.Item,
      });
    }
  });
};

export const deleteApplication = (id) => async (dispatch, getState) => {
  try {
    const userId = getState().auth.user.uid;
    if (userId) {
      const params = {
        TableName: 'applications',
        Key: {
          "id": id,
          "userid": userId
        }
      };
      docClient.delete(params, function (err, data) {
        if (err) {
          console.error("Can't delete item: ", err);
        } else {
          dispatch({
            type: "DELETE_APPLICATION",
            id,
          });
        }
      });

    }
  } catch (e) {
    console.log("application delete error: ", e);
  }
};
export const deleteAllApplications = () => async (dispatch, getState) => {
  try {
    const userId = getState().auth.user.uid;
    const applicationToDeleteRef = database.ref(
      `users/${userId}/applications/`
    );
    await applicationToDeleteRef.remove();
    dispatch({
      type: "DELETE_ALL_APPLICATIONS",
    });
  } catch (e) {
    console.log("application delete all error: ", e);
  }
};
export const editApplication =
  (formValues) => async (dispatch, getState) => {
    try {
      const generateUpdateQuery = (fields) => {
        let exp = {
          UpdateExpression: 'set',
          ExpressionAttributeNames: {},
          ExpressionAttributeValues: {}
        }
        Object.entries(fields).forEach(([key, item]) => {

          if (!['id', 'userid'].includes(key)) {
            exp.UpdateExpression += ` #${key} = :${key},`;
            exp.ExpressionAttributeNames[`#${key}`] = key;
            exp.ExpressionAttributeValues[`:${key}`] = item
          }

        })
        exp.UpdateExpression = exp.UpdateExpression.slice(0, -1);
        return exp
      }
      let expression = generateUpdateQuery(formValues)


      const userId = getState().auth.user.uid;
      const params = {
        TableName: 'applications',
        Key: {
          "id": formValues.id,
          "userid": userId
        },
        ...expression
      }
      docClient.update(params, function (err, data) {
        if (err) {
          console.log('ERROR: ', JSON.stringify(err))
        } else {
          dispatch({
            type: "EDIT_APPLICATION",
            payload: formValues,
            id: formValues.id,
          });
        }
      });
    } catch (e) {
      console.error("edit application error: ", e);
    }
  };

export const fetchApplications = (applicationGroupName) => async (dispatch, getState) => {
  const userId = getState().auth?.user?.uid;
  if (userId) {
    const params = {
      ExpressionAttributeValues: {
        ':userid': userId
      },
      FilterExpression: "userid = :userid",
      TableName: 'applications'
    };
    docClient.scan(params, function (err, data) {
      if (err) {
        console.log(JSON.stringify(err, undefined, 2))
      } else {
        dispatch({
          type: "FETCH_APPLICATIONS",
          payload: data.Items || [],
        });
      }
    });
  }
};
