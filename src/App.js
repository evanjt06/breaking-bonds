import React from 'react'
import Test from "./Test";
import {Routes,Route} from 'react-router-dom'
import Units from "./Units";
import NotFound404 from "./NotFound404";

export default function App() {

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Units />} />
        <Route path={"/test"} element={<Test />} />
        <Route path={"*"} element={<NotFound404 />} />
      </Routes>
      </>
  )

}