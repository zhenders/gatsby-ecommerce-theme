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
        <script src="https://cdn.ably.com/lib/ably.min-1.js">
          const ably = new
          Ably.Realtime.Promise('JjJuZA.L_Iu1A:5vTBWNz5LBwGS2jLv_8Z5nRwZxnjydLhznAu91sR8HM');
          await ably.connection.once('connected'); console.log('Connected to
          Ably!'); const channel = ably.channels.get('quickstart');
        </script>
        <script
          src="https://unpkg.com/web-vitals@3/dist/web-vitals.iife.js"
          onload="(function() {
function sendToAnalytics(metric) {

  const body = JSON.stringify(metric);

  channel.publish(body);                                                                                  
                                                                                   
}
onCLS(sendToAnalytics);
onFID(sendToAnalytics);
onLCP(sendToAnalytics);
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
