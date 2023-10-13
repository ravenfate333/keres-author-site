import React from "react";
import AuthorImage from "../assets/images/authorphoto.webp";
import "../styles/bio.scss";

function Bio() {
  return (
    <>
      <div className="bio">
        <h1>About Beronika Keres</h1>
        <div className="bio-container">
          <img
            className="author-image"
            src={AuthorImage}
            alt="Photo of Beronika Keres"
          />
          <div className="author-bio">
            <p>
              Beronika Keres is the Canadian author of the dark fantasy thriller
              series, Cracked Coffins. In the second grade, she decided she
              wanted to be an author and has spent her life honing her craft and
              pursuing her dream. She can often be found chasing plot bunnies
              and writing books.
            </p>
            <p>
              When she’s not writing, she enjoys spending time with her family,
              or listening to some gothic rock, punk, or metal while working on
              her newest spike and patch covered project.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bio;
