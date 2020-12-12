import React from "react";
import "./Form.css";

const Form = ({ handleSubmit, handleOnChange, languageOptions }) => {
  return (
    <div className="container">
      <div className="heading">
        <h1>What words will you discover today?</h1>
      </div>
      <div className="search-form">
        <form onSubmit={handleSubmit}>
          <div className="fields">
            <select
              id="select-language"
              name="languageSelected"
              onChange={handleOnChange}
            >
              <option selected="Language">Language</option>
              {languageOptions}
            </select>
            <input
              type="text"
              placeholder="Type your word here"
              name="word"
              onChange={handleOnChange}
            ></input>
            <button type="submit" id="submit-button">
              Search Now
            </button>
          </div>
        </form>
      </div>
      {
        //  <WordList wordList={wordList}></WordList>
      }
    </div>
  );
};

export default Form;
