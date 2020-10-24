import React from 'react'
import Section from './Section/Section'
import Aside from './Aside/Aside'
import About from './About/About'

const Main = () => {
	return(
		<div className="container">
			<div className="row">
				<Section/>
				<Aside/>
				<About/>
			</div>
		</div>
	)
}

export default Main