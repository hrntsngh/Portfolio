import React from "react";
import { delay, motion } from "framer-motion";

import "./Footer.css";
const Footer = () => {
  return (
    <div id="footer">
      <div className="footer_top">
        <div className="animate">
          <motion.h2
            initial={{ opacity: 0, zIndex: 1 }}
            whileInView={{ opacity: 1 }}
            className="animate1"
          >
            ਅਸਤਾਦ
          </motion.h2>

          <motion.h2
            initial={{ x: "-100px", zIndex: -1 }}
            whileInView={{ x: 0, zIndex: 1 }}
            transition={{ delay: 0.2 }}
            className="animate2"
          >
            | ASTAAD
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          #JusticeForSIDHUMOOSEWALA
        </motion.p>
        <h6>© 2024 Harneet Singh Kahlon. All rights reserved</h6>
      </div>
    </div>
  );
};
export default Footer;
