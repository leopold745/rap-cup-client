import React from "react"

import styles from "./BigButton.module.css"

const BigButton = ({ children, onClick }) => {
	return <div className={ styles.container }>
		<div className={ styles.innerbox } onClick = {onClick}>
			<div className={ styles.label }>
				{ children }
			</div>
		</div>
	</div>
}

export default BigButton