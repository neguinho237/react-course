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

      <SingUp/>
    </body>
  );
}

export default App;