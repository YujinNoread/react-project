import React from 'react'
import headerLogo from './Logo.png'
import headerBanner from './Banner.png'

const Header = () => {
	return(
		<header className="header">
			<div className="container">
				<div className="row align-item-center-md header__row">
					<div className="col-xs-12 col-md-3">
						<div className="header__logo">
							<img src={headerLogo} alt=""/>
						</div>
					</div>
					<div className="col-xs-12 col-md-9">
						<div className="header__banner">
							<img src={headerBanner} alt=""/>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header