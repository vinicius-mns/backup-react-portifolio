import { Routes, Route } from "react-router-dom"
import myPath from "./myPaths"

import Intro from "../pages/Intro"
import QuemSouEu from "../pages/QuemEuSou"
import OQueEuSei from "../pages/OQueEuSei"

export default function MyRoutes() {
  return(
    <Routes>
      <Route path='/' element={ <Intro /> } />
      <Route path={ myPath.quemSou } element={ <QuemSouEu /> } />
      <Route path={ myPath.oQueSei } element={ <OQueEuSei /> } />
    </Routes> 
  )
}