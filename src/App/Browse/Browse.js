import React from 'react'

const Browse = () => {
	return(
		<section className="browse">
		<div className="container">
			<div className="row align-item-center-sm">
				<div className="col-xs-12">
					<div className="navigation hidden-menu">
						<ul className="browse__menu">
							<li><a href="/">insipration</a></li>
							<li><a href="/">technology</a></li>
							<li><a href="/">freebies</a></li>
							<li><a href="/">wordpress</a></li>
							<li><a href="/">tutorials</a></li>
							<li><a href="/">fonts</a></li>
							<li><a href="/">wallpapers</a></li>
						</ul>
					</div>
					<div className="nav-mobile-menu">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	</section>
	)
}

export default Browse