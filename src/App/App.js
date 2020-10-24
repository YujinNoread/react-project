import React from 'react'
import Header from './Header/Header'
import Nav from './Nav/Nav'
import Browse from './Browse/Browse'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import js from './js'


import '../common/style/reset.css'
import '../common/style/css_grid.css'
import '../common/style/base.css'


const App = () => {
	return(
			<>
				<div id="fb-root"></div>
				<script async defer crossorigin="anonymous" src="https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v8.0" nonce="ukrGX2wk"></script>
				<Header/>
				<Nav/>
				<Browse/>
				<Main/>
				<Footer/>
				<script src={js}></script>
			</>
	)
}

export default App