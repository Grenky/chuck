import React, { useEffect, useState } from "react";
import './App.css';
import Buttons from "./Buttons";
import Chuck from "./Chuck";
import Header from "./Header.js";
import Title from "./Title.js";
import axios from "axios";


function App() {
  const [joke, setJoke] = useState('')
  const [category, setCategory] = useState('')

  useEffect (()=> {
    const fetchData = async () => {
      await axios.get(category  && category !== 'random' ?
         `https://api.chucknorris.io/jokes/random?category=${category}` :
         'https://api.chucknorris.io/jokes/random')
      .then((res) => {
        setJoke(res.data);
      })
      .catch((err) => console.log(err));
    }
    fetchData();
  },[category]);

  

  return (
    <div className="App">
        <Header />
        <Title />
        <Buttons click={setCategory} />
        <Chuck joke={joke}/>    
    </div>
  );
}

export default App;
