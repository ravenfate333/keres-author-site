import React from "react";
import "../styles/crackedcoffins.scss";
import CrackedCoffins from "../assets/CrackedCoffinsCover.jpg";
import BindingBlood from "../assets/BindingBloodCover.jpg";
import HarrowedHearts from "../assets/HarrowedHeartsCover.jpeg";
import Button from "@mui/material/Button";

function CrackedCoffinsSeries() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <>
      <body>
        <main>
          <h1>The Cracked Coffins Series</h1>
          <div className="book-collection">
            <div className="book">
              <div className="cracked-coffins">
                <img
                  className="book-cover"
                  src={CrackedCoffins}
                  alt="Cracked Coffins Book Cover"
                />
                <div className="info-container">
                  <h2>Cracked Coffins #1</h2>
                  <div className="blurb">
                    <p>Run. Fight. Survive.</p>
                    <p>
                      A life of violence and drugs leaves Marianna Cortez
                      desperate for normality. For a brief instant, she thinks
                      she has found that with Denendrius. But he can’t maintain
                      his sweet facade for long. Soon, he reveals himself for
                      what he is... a deranged vampire longing to ensnare her in
                      a deadly game of cat and mouse.
                    </p>
                    <p>Plan. Plot. Pray.</p>
                    <p>
                      Forced to play a part in Denendrius’s twisted fantasies,
                      Marianna hunts for a way to escape. But he’s stronger than
                      her, and capable of unimaginable cruelty. With her only
                      hope of survival being to study her captor and learn his
                      weaknesses, can Marianna uncover secrets from Denendrius’s
                      dark past she can use to destroy him? Or will this
                      monster, who clawed his way through her history, slaughter
                      her chance at a future?
                    </p>
                  </div>
                  <div className="buy-buttons">
                  <Button
                      role="link"
                      onClick={() =>
                        openInNewTab("https://www.amazon.com/dp/B08GC77R79")
                      }
                      variant="text"
                    >
                      Amazon USA
                    </Button>
                    <Button
                      role="link"
                      onClick={() =>
                        openInNewTab("https://www.amazon.ca/dp/B08GC77R79")
                      }
                      variant="text"
                    >
                      Amazon CA
                    </Button>
                    <Button
                      role="link"
                      onClick={() =>
                        openInNewTab("https://www.amazon.co.uk/dp/B08GC77R79")
                      }
                      variant="text"
                    >
                      Amazon UK
                    </Button>
                    <Button
                      role="link"
                      onClick={() =>
                        openInNewTab("https://books.apple.com/book/cracked-coffins/id1528388498")
                      }
                      variant="text"
                    >
                      Apple
                    </Button>
                    <Button
                      role="link"
                      onClick={() =>
                        openInNewTab("https://www.barnesandnoble.com/w/cracked-coffins-beronika-keres/1137396822")
                      }
                      variant="text"
                    >
                      Barnes & Noble
                    </Button>
                    <Button
                      role="link"
                      onClick={() =>
                        openInNewTab("https://www.kobo.com/ca/en/ebook/cracked-coffins-1")
                      }
                      variant="text"
                    >
                      Kobo
                    </Button>
                    <Button
                      role="link"
                      onClick={() =>
                        openInNewTab("https://play.google.com/store/books/details?id=UQ75DwAAQBAJ")
                      }
                      variant="text"
                    >
                      Google Play
                    </Button>
                    <Button
                      role="link"
                      onClick={() =>
                        openInNewTab("https://books2read.com/CrackedCoffins/")
                      }
                      variant="text"
                    >
                      More Retailers
                    </Button>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="book">
              <div className="binding-blood">
                <img
                  className="book-cover"
                  src={BindingBlood}
                  alt="Binding Blood Book Cover"
                />
                <div className="info-container">
                  <h2>Binding Blood #2</h2>
                  <div className="blurb">
                    <p>
                      After being used as bait to capture Denendrius, Marianna
                      had no choice but to save the loathsome vampire to ensure
                      her own survival. But not before Denendrius was fed the
                      cure for vampirism. Now, awakened as a human, he has no
                      memories beyond his mortal life in Ancient Rome.
                    </p>
                    <p>
                      He can’t recall the people he tortured.
                      <br /> The countless lives he took.
                      <br /> Or why vampires far and wide are hunting him.
                    </p>
                    <p>
                      How long he’ll stay like this, Marianna doesn’t know, but
                      she has no intention of wasting the opportunity. Dodging
                      vampire attacks, she searches for a way to turn him over
                      to the vampire king before he can retrieve his memories
                      and escape.
                    </p>
                    <p>
                      Yet the more time she spends with Denendrius, the further
                      she becomes entangled in his web of lies and secrets.
                      Soon, she finds herself questioning those who claim to be
                      allies while fighting to regain a piece of the life he
                      stole from her.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="book">
              <div className="harrowed-hearts">
                <img
                  className="book-cover"
                  src={HarrowedHearts}
                  alt="Harrowed Hearts Book Cover"
                />
                <div className="info-container">
                  <h2>Harrowed Hearts #3</h2>
                  <div className="blurb">
                    <p>
                      Captured by the vampire king. <br />
                      Imprisoned in his medieval castle.
                    </p>
                    <p>
                      Denendrius finds himself paying for lifetimes of heinous
                      acts while his blood mark on Marianna is broken.
                    </p>
                    <p>
                      Marianna thought this would allow her to reclaim her
                      freedom, yet her hopes fall tragically short. Denendrius’s
                      blood mark has left her with jarring side effects that
                      prompt the king to sequester her to protect her from his
                      clan.
                    </p>
                    <p>
                      Yet dark secrets lurk within the castle halls. And what
                      Marianna learns about herself and those around her will
                      shatter everything she thought she knew...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}

export default CrackedCoffinsSeries;
