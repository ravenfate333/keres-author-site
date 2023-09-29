import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoodreads } from '@fortawesome/free-brands-svg-icons';
import bookbub from '../assets/images/bookbub.webp';

const amazon = <FontAwesomeIcon icon={faAmazon} />;
const tiktok = <FontAwesomeIcon icon={faTiktok} />;
const instagram = <FontAwesomeIcon icon={faInstagram} />;
const facebook = <FontAwesomeIcon icon={faFacebook} />;
const goodreads = <FontAwesomeIcon icon={faGoodreads} />;

function SocialLinks() {
  return (
    <>
      <div style={{ fontSize: "1.6rem", display:"flex", alignItems:"center" }}>
        <a
          style={{ color: "white" }}
          href="https://amazon.com/author/beronikakeres"
        >
          {amazon}
        </a>
        &nbsp;&nbsp;
        <a style={{ color: "white" }} href="https://tiktok.com/@beronikakeres">
          {tiktok}
        </a>
        &nbsp;&nbsp;
        <a
          style={{ color: "white" }}
          href="https://instagram.com/beronikakeres"
        >
          {instagram}
        </a>
        &nbsp;&nbsp;
        <a
          style={{ color: "white" }}
          href="https://facebook.com/AuthorBeronikaKeres"
        >
          {facebook}
        </a>
        &nbsp;&nbsp;
        <a
          style={{ color: "white" }}
          href="https://www.goodreads.com/author/show/20537997.Beronika_Keres"
        >
          {goodreads}
        </a>
        <a
          style={{ color: "white" }}
          href="https://www.bookbub.com/authors/beronika-keres"
        >
          <img src={bookbub} alt="book bub icon" />
        </a>
      </div>
    </>
  );
}

export default SocialLinks

