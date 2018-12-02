import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import returns from './return.md';

function action() {
  return {
    chunks: ['return'],
    title: returns.title,
    component: (
      <Layout>
        <div style={{ background: 'white' }}>
          <Page {...returns} />
        </div>
      </Layout>
    ),
  };
}

export default action;
