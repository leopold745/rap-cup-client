import React from "react"

import Background from "../../pure-components/Background/Background"
import Footer from "../../pure-components/Footer/Footer"
import Title from "../../pure-components/Title/Title"
import { Container, Input, Button } from "../../pure-components/HomeForm/HomeForm"

const Join = () => {
	return <Background>
		<Title>RAP CUP</Title>
			<Container>
				<>
					<Input label='Pseudo'/>
					<Input label='Code'/>
				</>
				<Button>ENTER</Button>	
			</Container>
		<Footer/>
	</Background>
}

export default Join