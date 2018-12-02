import React from 'react';

import Vote from './Vote';
import Layout from '../../components/Layout';

function action() {
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
