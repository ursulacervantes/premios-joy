/* eslint-disable import/prefer-default-export */
import { GET_SERVICES } from '../constants';

function setServices(services) {
  return {
    type: GET_SERVICES,
    services,
  };
}

export function fetchServices() {
  return (dispatch, getState, { getFirebase }) =>
    getFirebase()
      .firestore()
      .collection('services')
      .onSnapshot(snapshot => {
        const services = getState().service.list || {};
        snapshot.docChanges().forEach(change => {
          services[change.doc.id] = change.doc.data();
        });
        dispatch(setServices(services));
      });
}
