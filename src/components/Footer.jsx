import React from "react";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <>
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
      <div>
        <p>Area for Newsletter</p>
      </div>
    </>
  );
}

export default Footer;
