import React from 'react'
import Section from './Section/Section'
import Aside from './Aside/Aside'
import About from './About/About'

const Main = ({
	needFilter,
	name,
	addFilterByCategory
}) => {
	return(
		<div className="container">
			<div className="row">
				<Section
					needFilter={needFilter}
					name={name}
					addFilterByCategory={addFilterByCategory}
				/>
				<Aside/>
				<About/>
			</div>
		</div>
	)
}

export default Main