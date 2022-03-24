import React, { lazy } from 'react';

const Navbar = lazy(() => import('app2/Navbar'));
const Footer = lazy(() => import('app2/Footer'));

import './style.css';

function App() {
  return (
    <div className="wrap">
      <React.Suspense fallback="Loading..">
        <div className="navbar">
          <Navbar />
        </div>
      </React.Suspense>
      <div className="container">Hello Microfrontend</div>
      <React.Suspense fallback="Loading..">
        <div className="footer">
          <Footer />
        </div>
      </React.Suspense>
    </div>
  );
}

export default App;
