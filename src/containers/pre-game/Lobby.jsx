import React from "react"
import { useUserStore } from "../../contexts/User"
import Background from "../../pure-components/Background/Background"
import Footer from "../../pure-components/Footer/Footer"
import Title from "../../pure-components/Title/Title"
import { LobbyCard } from "../../pure-components/Lobby/Lobby"
const Lobby = () => {
	return <Background>
		<Title>RAP CUP</Title>
		<div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', flexWrap: 'wrap'}}>
			<LobbyCard isUserTeam={true}/>
			<LobbyCard/>
			<LobbyCard/>
			<LobbyCard/>
		</div>
		<Footer/>
	</Background>
}

export default Lobby