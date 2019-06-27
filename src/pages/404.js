import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout noFooter>
    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-5">
                <span className="section-heading-upper">Page not found</span>
                <span className="section-heading-lower">Not a valid URL</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    >
  </Layout>
);

export default IndexPage;
