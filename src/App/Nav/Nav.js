import React from 'react'
import {Link} from 'react-router-dom'

const Nav = ({
	removeFilter
}) => {
	return (
		<section className="nav">
		<div className="container">
			<div className="row nav__row align-item-center-sm">
				<div className="col-xs-12 col-sm-8 col-md-7">
					<div className="navigation hidden-menu">
						<ul className="menu">
							<li><Link to="/react-project" onClick={()=>removeFilter()}>Home</Link></li>
							<li><Link to="/">About Me</Link></li>
							<li><Link to="/">Design Services</Link></li>
							<li><Link to="/">Request Quote</Link></li>
							<li><Link to="/">Advertise</Link></li>
							<li><Link to="/">Contact Me</Link></li>
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
						<Link to="/" className="nav__icon-1"> </Link>
						<Link to="/" className="nav__icon-2"> </Link>
						<Link to="/" className="nav__icon-3"> </Link>
						<Link to="/" className="nav__icon-4"> </Link>
					</div>
				</div>
			</div>
		</div>
	</section>
	)
}

export default Nav