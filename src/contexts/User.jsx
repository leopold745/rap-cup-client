import { createContext, useState, useContext } from "react"

const UserContext = createContext({})

const Provider = ({ children }) => {
	const [user, setUser] = useState({ pseudo: '' })
	
	const modifyUser = (newProp) => {
		setUser(prev => ({ ...prev, ...newProp }))
	}

	return <UserContext.Provider value={{ user, modifyUser }}>
		{ children }
	</UserContext.Provider>
}

const useUserStore = () => useContext(UserContext)

export default Provider

export { useUserStore }