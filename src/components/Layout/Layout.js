import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import Header from "../Header";
import Footer from "../Footer";
import * as styles from "./Layout.module.css";

// CSS not modular here to provide global styles
import "./Globals.css";

const Layout = ({ props, children, disablePaddingBottom = false }) => {
  return (
    <>
      <Helmet>
        {/* Add any sitewide scripts here */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <script
          src="https://cdn.ably.com/lib/ably.min-1.js"
          onload="(function() {
  const ably = new Ably.Realtime.Promise('3ZloEQ.73SWWA:GtjV15FjbuQYXZpV8L1lPbzMLD2eVJbfQPJrEXRVa9A');
  
  async function doPubSub() {
  await ably.connection.once('connected'); 
  console.log('Connected to Ably!');

  const channel = ably.channels.get('webvitals');

  await channel.publish('update',metric);
} 
  
  function sendToAnalytics(metric) {
  
  console.log(metric);  
    
  doPubSub();                                                                                                                                                                                    
}
                                                                     
 var script = document.createElement('script');
  script.src = 'https://unpkg.com/web-vitals@3/dist/web-vitals.iife.js';
  script.onload = function() {
    // When loading `web-vitals` using a classic script, all the public
    // methods can be found on the `webVitals` global namespace.
    webVitals.onCLS(sendToAnalytics);
    webVitals.onFID(sendToAnalytics);
    webVitals.onLCP(sendToAnalytics);
  }
  document.head.appendChild(script);                                                                    
                                                                     
})()"
        ></script>
      </Helmet>

      <Header />
      <main
        className={`${styles.main} ${
          disablePaddingBottom === true ? styles.disablePaddingBottom : ""
        }`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
