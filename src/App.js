import React from "react"

import { Routes, Route } from 'react-router-dom'
import Home from "./containers/pre-game/Home"
import Join from "./containers/pre-game/Join"
import Create from "./containers/pre-game/Create"
import PreGame from "./containers/PreGame"
import Lobby from "./containers/pre-game/Lobby"

function App() {
  return (
	<Routes>
		<Route path = '/' element = {<PreGame/>}>
			<Route path = '/' element = {<Home/>}/>
			<Route path = '/create' element = {<Create/>}/>
			<Route path = '/join' element = {<Join/>}/>
			<Route path = '/room/:roomID' element = {<Lobby/>}/>
		</Route>
	</Routes>
  ) 
}

export default App