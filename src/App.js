import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { createContext } from "react";

export const GlobalData = createContext();

const App = () => {
  const [datas, setdatas] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=0bcafd5b459497ec53d81e9fc940f86d&page=1`
    );
    const res = await data.json();
    setdatas(res.results);
  };

  return (
    <GlobalData.Provider value={{ datas: datas }}>
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/details/:id" element={<Details />}></Route>
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </GlobalData.Provider>
  );
};

export default App;
