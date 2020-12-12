import { useEffect, useState } from "react";
import apiService from "./ApiService/apiService";
import Form from "./components/Form/Form";
import WordList from "./components/WordList/WordList";

const App = () => {
  const [languages, setLanguages] = useState([]);
  const [userInput, setUserInput] = useState({
    languageSelected: "",
    word: "",
  });
  const [wordList, setWordList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiService.getLanguages().then((languageList) => {
      setLanguages(languageList);
    });
  }, []);

  let languageOptions = languages.map((language) => (
    <option value={language} name="language">
      {language}
    </option>
  ));

  console.log(userInput.word);
  console.log(userInput.languageSelected);
  console.log("outside, ", wordList);

  const handleSubmit = (event) => {
    event.preventDefault();
    apiService
      .getWordInfo(userInput)
      .then((word) => setWordList(word))
      .then(() => setLoading(false));
  };

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUserInput((userInput) => ({
      ...userInput,
      [name]: value,
    }));
  };
  return (
    <>
      <Form
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
        languageOptions={languageOptions}
      ></Form>
      {!loading ? <WordList wordList={wordList}></WordList> : ""}
    </>
  );
};

export default App;
