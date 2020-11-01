import React, { Component } from 'react'
import Header from './Header/Header'
import Nav from './Nav/Nav'
import Browse from './Browse/Browse'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import js from './js'


import '../common/style/reset.css'
import '../common/style/css_grid.css'
import '../common/style/base.css'


class App extends Component {

	state = {
		postCategory:{
			needFilter:false,
			category: ""
		}
	}
	
	addFilterByCategory = (name) =>{
		this.setState({
			postCategory:{
				needFilter:true,
				category: name
			}
		})
	}
	removeFilter = () => {
		this.setState({
			postCategory:{
				needFilter:false,
				category: ""
			}
		})
	}

	render(){
		return(
			<>
				<div id="fb-root"></div>
				<script async defer crossOrigin="anonymous" src="https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v8.0" nonce="ukrGX2wk"></script>
				<Header/>
				<Nav
					removeFilter={this.removeFilter}
				/>
				<Browse
					addFilterByCategory={this.addFilterByCategory}
				/>
				<Main
					needFilter={this.state.postCategory.needFilter}
					name={this.state.postCategory.category}
				/>
				<Footer/>
				<script src={js}></script>
			</>
		)
	}

}

export default App