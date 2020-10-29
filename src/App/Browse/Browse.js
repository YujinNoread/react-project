import React from 'react'

const Browse = ({
	addFilterByCategory
}) => {
	return(
		<section className="browse">
		<div className="container">
			<div className="row align-item-center-sm">
				<div className="col-xs-12">
					<div className="navigation hidden-menu">
						<ul className="browse__menu">
							<li onClick={()=>addFilterByCategory("Insipration")}>insipration</li>
							<li onClick={()=>addFilterByCategory("Technology")}>technology</li>
							<li onClick={()=>addFilterByCategory("Freebies")}>freebies</li>
							<li onClick={()=>addFilterByCategory("Wordpress")}>wordpress</li>
							<li onClick={()=>addFilterByCategory("Tutorials")}>tutorials</li>
							<li onClick={()=>addFilterByCategory("Fonts")}>fonts</li>
							<li onClick={()=>addFilterByCategory("Freebies")}>wallpapers</li>
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