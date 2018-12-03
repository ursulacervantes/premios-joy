/* eslint-disable import/prefer-default-export */
import { GET_POLL, SET_VOTE } from '../constants';

function setPoll(questions) {
  return {
    type: GET_POLL,
    questions,
  };
}

export function fetchPoll() {
  return (dispatch, getState, { getFirebase }) =>
    getFirebase()
      .firestore()
      .collection('poll')
      .doc('5xnyRNmjKsCZOS7w827s')
      // .collection('questions')
      .onSnapshot(snapshot => {
        // const questions = getState().service.list || {};
        // const questions = {};
        // debugger;
        // snapshot.docChanges().forEach(change => {
        //   debugger;
        // });
        dispatch(setPoll(snapshot.data().questions));
      });
}

export function setVote(vote) {
  return (dispatch, getState, { getFirebase }) => {
    debugger;
  }
    // getFirebase()
    //   .firestore()
    //   .collection('poll')
    //   .doc('5xnyRNmjKsCZOS7w827s')
    //   .set(vote)
}
