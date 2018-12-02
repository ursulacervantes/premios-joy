import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import firebase from 'firebase';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import rootReducer from '../reducers';
import createHelpers from './createHelpers';

export default function configureStore(initialState, helpersConfig) {
  const helpers = createHelpers(helpersConfig);
  const middleware = [
    thunk.withExtraArgument(
      Object.assign({}, helpers, {
        getFirebase,
      }),
    ),
  ];

  const enhancer = applyMiddleware(...middleware);

  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: 'AIzaSyCG1ObZiQopcwvGubbjyZPNhmxO8QN9sLg',
      authDomain: 'premiosjoy.firebaseapp.com',
      databaseURL: 'https://premiosjoy.firebaseio.com',
      projectId: 'premiosjoy',
      storageBucket: 'premiosjoy.appspot.com',
      messagingSenderId: '162209992598',
    });
  }

  const createStoreWithFirebase = compose(reactReduxFirebase(firebase))(
    createStore,
  );

  const store = createStoreWithFirebase(rootReducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (__DEV__ && module.hot) {
    module.hot.accept('../reducers', () =>
      // eslint-disable-next-line global-require
      store.replaceReducer(require('../reducers').default),
    );
  }

  return store;
}
