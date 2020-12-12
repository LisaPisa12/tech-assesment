import React from "react";
import "./Word.css";

const Word = ({ word }) => {
  return (
    <div className="word_container">
      <h3>Word: {word.word}</h3>
      <div className="wiki_link">
        <a href={`${`https://en.wikipedia.org/wiki/${word.word}`}`}>
          More details
        </a>
      </div>
    </div>
  );
};

export default Word;
