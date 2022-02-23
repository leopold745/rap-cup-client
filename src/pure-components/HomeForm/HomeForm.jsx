import React from "react"
import styles from "./HomeForm.module.css"

const Container = ({ children }) => {
	return <div className={styles.container}>
		{ children }
	</div>
}

const Input = ({ label, onChange }) => {
	return <div className={styles.inputContainer}>
		<div className={styles.label}>{ label }</div>
		<input onChange = {onChange} type = 'text' className={styles.inputBox}/>
	</div>
}

const Button = ({ children, onClick }) => {
	return <button onClick = {onClick} className={styles.btn}>{ children }</button>
}

export {
	Container,
	Input,
	Button
}