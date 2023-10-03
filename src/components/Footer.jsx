import React from "react";
import SocialLinks from "./SocialLinks";
import "../styles/footer.scss";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="side-1">
          <div>
            <h3>Find Me on Social Media!</h3>
            <SocialLinks />
          </div>
          <div className="mailing">
            <div
              className="ml-form-embed"
              data-account="2083638:r3u1j5u3l4"
              data-form="5983908:e0s3c3"
            ></div>
          </div>
        </div>

        <div className="side-2">
          <p>
            If you enjoy reading indie books, check out{" "}
            <a href="https://indiebookvault.com/">Indie Book Vault</a> to find
            other great authors like Beronika Keres.
          </p>
          <p>All Rights Reserved © 2023 Beronika Keres</p>
          <p>
            All writings, blogs, books, and content within this site belong to
            Beronika Keres and are not permitted to be used without written
            permission.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
