import React from 'react';

import Vote from './Vote';
import Layout from '../../components/Layout';

import { fetchPoll } from '../../actions/poll';

function action({ store }) {

  store.dispatch(fetchPoll());

  return {
    chunks: ['vote'],
    title: 'Vote',
    component: (
      <Layout>
        <Vote />
      </Layout>
    ),
  };
}

export default action;
