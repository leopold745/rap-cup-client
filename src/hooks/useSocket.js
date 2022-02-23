import { useState, useEffect } from 'react'
import { io } from "socket.io-client"

const useSocket = (endpoint) => {
	const [socket, setSocket] = useState()
	
	useEffect(() => {
		const newSocket = io(endpoint)
		setSocket(newSocket)
		console.log("New socket set : ", newSocket)

		return () => {
			console.log("Closing the socket", newSocket) 
			newSocket.close()
			console.log("Socket closed", newSocket) 
		}
	}, [endpoint])

	return socket
}

export default useSocket