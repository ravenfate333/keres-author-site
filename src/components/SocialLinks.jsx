import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoodreads } from '@fortawesome/free-brands-svg-icons';

const amazon = <FontAwesomeIcon icon={faAmazon} />;
const tiktok = <FontAwesomeIcon icon={faTiktok} />;
const instagram = <FontAwesomeIcon icon={faInstagram} />;
const facebook = <FontAwesomeIcon icon={faFacebook} />;
const goodreads = <FontAwesomeIcon icon={faGoodreads} />;

function SocialLinks() {
  return (
    <>
      <a href="https://amazon.com/author/beronikakeres">{amazon}</a>
      <a href="https://tiktok.com/@beronikakeres">{tiktok}</a>
      <a href="https://instagram.com/beronikakeres">{instagram}</a>
      <a href="https://facebook.com/AuthorBeronikaKeres">{facebook}</a>
      <a href="https://www.goodreads.com/author/show/20537997.Beronika_Keres">
        {goodreads}
      </a>
      
      <p>Social Links</p>
    </>
  );
}

export default SocialLinks

