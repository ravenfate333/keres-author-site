import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const up = <FontAwesomeIcon style={{color:"white"}} icon={faChevronUp}/>

function ScrollToTop() {
    const toTop = () =>{
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });
    }

  return (
    <>
      <p onClick={toTop}>{up}</p>
    </>
  );
}

export default ScrollToTop
