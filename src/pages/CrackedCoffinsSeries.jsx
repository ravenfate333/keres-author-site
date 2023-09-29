import React from "react";
import "../styles/crackedcoffins.scss";
import CrackedCoffins from "../assets/CrackedCoffinsCover.jpg";
import BindingBlood from "../assets/BindingBloodCover.jpg";
import HarrowedHearts from "../assets/HarrowedHeartsCover.jpeg";
import Book from "../components/Book";

const retailersCrackedCoffins = [
  { label: "Amazon USA", link: "https://www.amazon.com/dp/B08GC77R79" },
  { label: "Amazon CA", link: "https://www.amazon.ca/dp/B08GC77R79" },
  { label: "Amazon UK", link: "https://www.amazon.co.uk/dp/B08GC77R79" },
];

const retailersBindingBlood = [
  { label: "Amazon USA", link: "" },
  { label: "Amazon CA", link: "" },
  { label: "Amazon UK", link: "" },
];

const retailersHarrowedHearts = [
  { label: "Amazon USA", link: "" },
  { label: "Amazon CA", link: "" },
  {
    label: "Amazon UK",
    link: "",
  },
];

const blurbsCrackedCoffins = [
  "Run. Fight. Survive.",

  "A life of violence and drugs leaves Marianna Cortez desperate for normality. For a brief instant, she thinks she has found that with Denendrius. But he can’t maintain his sweet facade for long. Soon, he reveals himself for what he is... a deranged vampire longing to ensnare her in a deadly game of cat and mouse.",

  "Plan. Plot. Pray.",

  "Forced to play a part in Denendrius’s twisted fantasies, Marianna hunts for a way to escape. But he’s stronger than her, and capable of unimaginable cruelty.",

  "With her only hope of survival being to study her captor and learn his weaknesses, can Marianna uncover secrets from Denendrius’s dark past she can use to destroy him? Or will this monster, who clawed his way through her history, slaughter her chance at a future?",
];

const blurbsBindingBlood = [
  "After being used as bait to capture Denendrius, Marianna had no choice but to save the loathsome vampire to ensure her own survival. But not before Denendrius was fed the cure for vampirism. Now, awakened as a human, he has no memories beyond his mortal life in Ancient Rome.",

  "He can’t recall the people he tortured.",
  "The countless lives he took.",
  "Or why vampires far and wide are hunting him.",

  "How long he’ll stay like this, Marianna doesn’t know, but she has no intention of wasting the opportunity. Dodging vampire attacks, she searches for a way to turn him over to the vampire king before he can retrieve his memories and escape.",

  "Yet the more time she spends with Denendrius, the further she becomes entangled in his web of lies and secrets. Soon, she finds herself questioning those who claim to be allies while fighting to regain a piece of the life he stole from her.",
];

const blurbsHarrowedHearts = [
  "Captured by the vampire king.",
  "Imprisoned in his medieval castle.",
  "Denendrius finds himself paying for lifetimes of heinous acts while his blood mark on Marianna is broken.",
  "Marianna thought this would allow her to reclaim her freedom, yet her hopes fall tragically short. Denendrius’s blood mark has left her with jarring side effects that prompt the king to sequester her to protect her from his clan.",
  "Yet dark secrets lurk within the castle halls. And what Marianna learns about herself and those around her will shatter everything she thought she knew...",
];

const booksData = [
  {
    title: "Cracked Coffins #1",
    coverImage: CrackedCoffins,
    blurbs: blurbsCrackedCoffins,
    retailerButtons: retailersCrackedCoffins,
  },
  {
    title: "Binding Blood #2",
    coverImage: BindingBlood,
    blurbs: blurbsBindingBlood,
    retailerButtons: retailersBindingBlood,
  },
  {
    title: "Harrowed Hearts #3",
    coverImage: HarrowedHearts,
    blurbs: blurbsHarrowedHearts,
    retailerButtons: retailersHarrowedHearts,
  },
];

function CrackedCoffinsSeries() {
  return (
    <main>
      <h1>The Cracked Coffins Series</h1>
      <div className="book-collection">
        {booksData.map((book, index) => (
          <Book
            key={index}
            title={book.title}
            coverImage={book.coverImage}
            blurb={book.blurbs}
            retailerButtons={book.retailerButtons}
          />
        ))}
      </div>
    </main>
  );
}

export default CrackedCoffinsSeries;
