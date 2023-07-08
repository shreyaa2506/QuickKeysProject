import storageVars from "./locals";
import defaultWords from "./assets/words.json";

const getTime = () => parseInt(localStorage.getItem(storageVars.time)) || 60;
const getWords = () => {
  const localname = localStorage.getItem(storageVars.words);
  return localname ? JSON.parse(localname) : defaultWords;
};

export { getTime, getWords };
