import React from "react"

import Background from "../../pure-components/Background/Background"
import Title from "../../pure-components/Title/Title"
import BigButton from "../../pure-components/BigButton/BigButton"
import Footer from "../../pure-components/Footer/Footer"

import { Link } from "react-router-dom"


const Home = () => {
	return <Background>
		<Title>RAP CUP</Title>
		<div>
			<Link to = '/create' style={{ textDecoration: 'none' }}>
				<BigButton>CREER</BigButton>
			</Link>
			<Link to = '/join' style={{ textDecoration: 'none' }}>
				<BigButton>REJOINDRE</BigButton>
			</Link>
		</div>
		<Footer/>
	</Background>
}

export default Home