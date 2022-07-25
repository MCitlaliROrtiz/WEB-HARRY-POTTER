import React, { useEffect, useState } from 'react';
import Characters from './components/Characters'
import './App.css';

function App() {
  const [character, setCharacter] = useState([]);
  let getData = async () => {
    let url = `http://localhost:5000/Characters`;
    let getFetchData = await fetch(url).then((resul) => resul.json());
    setCharacter(getFetchData);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(character);

  return 
}

export default App;
