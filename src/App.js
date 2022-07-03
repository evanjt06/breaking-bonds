import React from 'react'
import Test from "./Test";
import {Routes,Route} from 'react-router-dom'
import Units from "./Units";
import NotFound404 from "./NotFound404";
import Login from "./Login";
import Register from "./Register";

export default function App() {

  if (window.location.href === "http://breakingbonds.surge.sh/login" || window.location.href === "http://breakingbonds.surge.sh/register") {
    window.location.href = "https://breakingbonds.surge.sh/login"
  }

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Units />} />
        <Route path={"/test"} element={<Test />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"*"} element={<NotFound404 />} />
      </Routes>
      </>
  )

}