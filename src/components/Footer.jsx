import React from "react";
import SocialLinks from "./SocialLinks";
import "../styles/footer.scss";
import IBVButton from "../assets/images/IBVButton.webp";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="main-content">
          <div className="social-container">
            <h3>Find Me On Social Media!</h3>
            <SocialLinks />
          </div>

          <div className="newsletter-container">
            <div
              className="ml-form-embed"
              data-account="2083638:r3u1j5u3l4"
              data-form="5983908:e0s3c3"
            ></div>
          </div>

          <div className="vault-container">
            <p>
              If you enjoy reading indie books, check out <br /> to find other
              great authors like Beronika Keres.
            </p>
            <a href="https://indiebookvault.com/">
              <img
                className="ibv-button"
                src={IBVButton}
                alt="Indie Book Vault Logo"
              />
            </a>
          </div>
        </div>

        <div className="legal">
          <p>All Rights Reserved © 2023 Beronika Keres</p>
          <p>
            All writings, blogs, books, and content within this site belong to
            Beronika Keres and are not permitted to be used without written
            permission.
          </p>
          <p>Privacy Policy</p> {/* TODO link + page + writeup */}
        </div>
      </div>
    </>
  );
}

export default Footer;
