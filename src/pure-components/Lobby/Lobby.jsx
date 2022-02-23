import React from "react"
import styles from "./Lobby.module.css"

const LobbyCard = ({ isUserTeam }) => {
	return <div className={styles.cardContainer}>
		{  isUserTeam ? <input type='text'/> : <div className={styles.teamName}>sample div</div> }
		<div className={styles.underContainer}>
			<div className={styles.picture}/>
			<div className={styles.label}>12345678</div>
			<div className={styles.label}>sample</div>
		</div>
	</div>
}

export { LobbyCard }