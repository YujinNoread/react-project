import React from 'react'

const About = () => {
	return (
		<section className="about">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-4">
						<h2 className="subtitle">about</h2>
						<div className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut purus odio, quis rutrum nibh. Etiam nec tellus malesuada odio tincidunt fringilla quis vitae nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla malesuada convallis. Morbi laoreet volutpat rhoncus.</div>
					</div>
					<div className="col-xs-12 col-sm-4">
						<h2 className="subtitle">Browse</h2>
						<div className="row">
							<div className="col-xs-6 col-sm-6">
								<ul className="about__list">
									<li><a href="/">Insipration</a></li>
									<li><a href="/">Technology</a></li>
									<li><a href="/">Freebies</a></li>
									<li><a href="/">Wordpress</a></li>
									<li><a href="/">Tutorials</a></li>
									<li><a href="/">Fonts</a></li>
									<li><a href="/">Wallpapers</a></li>
								</ul>
							</div>
							<div className="col-xs-6 col-sm-6">
								<ul className="about__list">
									<li><a href="/">Home</a></li>
									<li><a href="/">About Me</a></li>
									<li><a href="/">Design Services</a></li>
									<li><a href="/">Request Quote</a></li>
									<li><a href="/">Advertise</a></li>
									<li><a href="/">Contact Me</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-xs-12 col-sm-4">
						<h2 className="subtitle">write for us</h2>
						<div className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut purus odio, quis rutrum nibh. Etiam nec tellus malesuada odio tincidunt fringilla quis vitae nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla malesuada convallis.</div>
						<div className="about__link"><a href="/">Contact Us Now</a></div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About