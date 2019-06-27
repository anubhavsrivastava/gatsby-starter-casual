import React from 'react';
import config from '../../config';
export default function SiteHeader() {
  return (
    <h1 className="site-heading text-center text-white d-none d-lg-block">
      <span className="site-heading-upper text-primary mb-3">
        {config.subHeading}
      </span>
      <span className="site-heading-lower">{config.heading}</span>
    </h1>
  );
}
