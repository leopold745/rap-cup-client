import React from "react"

import Background from "../../pure-components/Background/Background"
import Title from "../../pure-components/Title/Title"
import Footer from "../../pure-components/Footer/Footer"
import { Container, Input, Button } from "../../pure-components/HomeForm/HomeForm"

const Create = () => {
	return <Background>
		<Title>RAP CUP</Title>
			<Container>
				<Input label='Pseudo'/>
				<Button>ENTER</Button>	
			</Container>
		<Footer/>
	</Background>
}

export default Create