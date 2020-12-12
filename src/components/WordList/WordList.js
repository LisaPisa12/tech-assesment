import React from "react";
import Word from "../Word/Word.js";
import "./WordList.css";

const WordList = ({ wordList }) => {
  return (
    <div className="word_list_container">
      <div className="word_chosen">
        <h3>
          Word Searched:{" "}
          {wordList.wordInformation.word.charAt(0).toUpperCase() +
            wordList.wordInformation.word.slice(1)}
        </h3>

        {wordList.wordInformation.additionalInformation ? (
          <div className="wiki_link">
            <a href={`${wordList.wordInformation.additionalInformation.link}`}>
              More Details
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
      <h1>Semantically similar words</h1>
      {wordList.semanticallySimilarWords.map((word, i) => {
        return <Word key={i} word={word}></Word>;
      })}
    </div>
  );
};

export default WordList;
