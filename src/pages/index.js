import React from 'react';

import Layout from '../components/Layout';

import intro from '../assets/images/intro.jpg';
const IndexPage = () => (
  <Layout activeLink="home">
    <section className="page-section clearfix">
      <div className="container">
        <div className="intro">
          <img
            className="intro-img img-fluid mb-3 mb-lg-0 rounded"
            src={intro}
            alt=""
          />
          <div className="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper">Fresh Coffee</span>
              <span className="section-heading-lower">Worth Drinking</span>
            </h2>
            <p className="mb-3">
              Every cup of our quality artisan coffee starts with locally
              sourced, hand picked ingredients. Once you try it, our coffee will
              be a blissful addition to your everyday morning routine - we
              guarantee it!
            </p>
            <div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" href="/#">
                Visit Us Today!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">Our Promise</span>
                <span className="section-heading-lower">To You</span>
              </h2>
              <p className="mb-0">
                When you walk into our shop to start your day, we are dedicated
                to providing you with friendly service, a welcoming atmosphere,
                and above all else, excellent products made with the highest
                quality ingredients. If you are not satisfied, please let us
                know and we will do whatever we can to make things right!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
