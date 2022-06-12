import React from 'react'
import Test from "./Test";
import {Routes,Route} from 'react-router-dom'
import Units from "./Units";
import NotFound404 from "./NotFound404";
import History from "./History";
import Login from "./Login";
import Register from "./Register";

export default function App() {

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Units />} />
        <Route path={"/test"} element={<Test />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/history"} element={<History />} />
        <Route path={"*"} element={<NotFound404 />} />
      </Routes>
      </>
  )

}