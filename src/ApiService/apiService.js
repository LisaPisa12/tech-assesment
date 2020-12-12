const BASE_URL = "https://api.gavagai.se/v3/";

const getLanguages = () => {
  return fetch(
    `${BASE_URL}languages?apiKey=${process.env.REACT_APP_GAVAGAI_API_KEY}`
  ).then((response) => response.json());
};

const getWordInfo = (userInput) => {
  return fetch(
    `${BASE_URL}lexicon/${userInput.languageSelected}/${userInput.word}?additionalFields=SEMANTICALLY_SIMILAR_WORDS&apiKey=${process.env.REACT_APP_GAVAGAI_API_KEY}`
  ).then((response) => response.json());
};

export default {
  getLanguages,
  getWordInfo,
};
