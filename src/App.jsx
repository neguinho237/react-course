import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./styles/tailwindcss/components/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import Navbar from "./hooks/components/Navbar"
import GetCep from "./request";
import GetPokemon from "./api/api-pokemon";
import SingUp from "./styles/css-modules/components/singup"
import Cta from "./components/Cta";


function App() {
  return (
    <body>
      {/* <Routes>
        <Route path="/" Component={SingUp} />
        <Route path="/navbar" Component={Navbar} />
        <Route path="/page-one" Component={PageOne} />
        <Route path="/page-two" Component={PageTwo} />
        <Route path="/page-three" Component={PageThree} />
      </Routes> */}

      <Cta titulo =  "Medium length heading goes here" subTitulo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." 
      button = "Cadastrar" palavrinhas = "A vida é curta demais para não aproveita-la" />
    </body>
  );
}

export default App;