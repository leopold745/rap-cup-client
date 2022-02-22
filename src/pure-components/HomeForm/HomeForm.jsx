import React from "react"
import styles from "./HomeForm.module.css"

const Container = ({ children }) => {
	return <div className={styles.container}>
		{ children }
	</div>
}

const Input = ({ label }) => {
	return <div className={styles.inputContainer}>
		<div className={styles.label}>{ label }</div>
		<input type = 'text' className={styles.inputBox}/>
	</div>
}

const Button = ({ children }) => {
	return <button className={styles.btn}>{ children }</button>
}

export {
	Container,
	Input,
	Button
}