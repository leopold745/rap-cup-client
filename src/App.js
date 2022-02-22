import React, { useState, useEffect } from "react"

import { Routes, Route } from 'react-router-dom'
import { io } from "socket.io-client"
import Home from "./containers/pre-game/Home"
import Join from "./containers/pre-game/Join"
import Create from "./containers/pre-game/Create"
import PreGame from "./containers/PreGame"

const ENDPOINT = "http://127.0.0.1:3001"

function App() {
	const [socket, setSocket] = useState()
	
	useEffect(() => {
		const newSocket = io(ENDPOINT)
		setSocket(newSocket)
		console.log("New socket set : ", newSocket)

		return () => {
			console.log("Closing the socket", newSocket) 
			newSocket.close()
			console.log("Socket closed", newSocket) 
		}
	}, []) 

	useEffect(() => {
		if (socket)
		{
			console.log("Socket modified", socket)
			socket.on("connect", () => {
				console.log("Socket connected")
			})
			console.log("Socket props added")
		}
	}, [socket])

  return (
	<Routes>
		<Route path = '/' element = {<PreGame/>}>
			<Route path = '/' element = {<Home/>}/>
			<Route path = '/create' element = {<Create/>}/>
			<Route path = '/join' element = {<Join/>}/>
		</Route>
	</Routes>
  ) 
}

export default App