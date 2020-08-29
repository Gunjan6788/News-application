import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div>
      <div className="container pb-3">
        <div className="row">
          <div className="col-12">
            <div>
              © 2020 News, an
              <span className={styles.blue}> Media Group </span>company. All
              rights reserved.
            </div>

            <div>
              <a href="https://www.vrbo.com/legal/terms-and-conditions">
                Terms and Conditions
              </a>
              ·
              <a href="https://www.vrbo.com/legal/privacy-policy">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
