import React from 'react'

const Nav = () => {
	return (
		<section className="nav">
		<div className="container">
			<div className="row nav__row align-item-center-sm">
				<div className="col-xs-12 col-sm-8 col-md-7">
					<div className="navigation hidden-menu">
						<ul className="menu">
							<li><a href="/">Home</a></li>
							<li><a href="/">About Me</a></li>
							<li><a href="/">Design Services</a></li>
							<li><a href="/">Request Quote</a></li>
							<li><a href="/">Advertise</a></li>
							<li><a href="/">Contact Me</a></li>
						</ul>
					</div>
					<div className="nav-mobile-menu">
						<span className="black"></span>
						<span className="black"></span>
						<span className="black"></span>
					</div>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-5 toggle">
					<div className="nav__social">
						<a href="/" className="nav__icon-1"> </a>
						<a href="/" className="nav__icon-2"> </a>
						<a href="/" className="nav__icon-3"> </a>
						<a href="/" className="nav__icon-4"> </a>
					</div>
				</div>
			</div>
		</div>
	</section>
	)
}

export default Nav