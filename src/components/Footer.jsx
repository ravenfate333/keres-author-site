import React from "react";
import SocialLinks from "./SocialLinks";
import "../styles/footer.scss";

function Footer() {
  return (
    <>
      <div className="footer">
        <SocialLinks />
        <p style={{ textAlign: "center" }}>
          If you enjoy reading indie books, check out{" "}
          <a style={{ color: "white" }} href="https://indiebookvault.com/">
            Indie Book Vault
          </a>{" "}
          to find other great authors like Beronika Keres.
        </p>
        <p style={{ textAlign: "center" }}>
          Copyright Notice: All writings, blogs, books, and content within this
          site belong to Beronika Keres and are not permitted to be used without
          written permission.
        </p>
        <div
          className="ml-form-embed"
          data-account="2083638:r3u1j5u3l4"
          data-form="5983908:e0s3c3"
        ></div>
      </div>
    </>
  );
}

export default Footer;
