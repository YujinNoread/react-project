import React from 'react'
import follow from './img/form/follow.jpg'
import latest1 from './img/latest/latest1.png'
import latest2 from './img/latest/latest2.png'
import latest3 from './img/latest/latest3.png'
import latest4 from './img/latest/latest4.png'
import latest5 from './img/latest/latest5.png'
import latest6 from './img/latest/latest6.png'
import banner2 from './img/banner2.jpg'


const Aside = () => {
	return (
		<aside className="aside col-xs-12 col-sm-4">
			<form action="" className="aside__form">
				<div className="form__search">
					<input type="text" name="search" id="" placeholder="Search Blog" className="search"/>
					<button></button>
				</div>
				<div className="row form__row">
					<div className="col-xs-4 col-sm-3">
						<div className="form__img">
							<img src={follow} alt=""/>
						</div>
					</div>
					<div className="col-xs-4 col-sm-4">
						<div className="form__count readers">1234</div>
						<div className="form__type">Readers</div>
						<div className="form__link"><a href="/">Subscribe Now</a></div>
					</div>
					<div className="col-xs-4 col-sm-5">
						<div className="form__count followers">1200</div>
						<div className="form__type">Twitter Followers</div>
						<div className="form__link"><a href="/">Follow on Twitter</a></div>
					</div>
				</div>
				<div className="form__email">
					<input type="text" name="email" id="" placeholder="Enter email address" className="email"/>
					<button>Subscribe</button>
				</div>
			</form>
			<div className="aside__images">
				<div className="row">
					<div className="col-xs-6 col-sm-6 aside__images-column">
						<a href="/"><img src="img/aside__images/aside1.jpg" alt=""/></a>
					</div>
					<div className="col-xs-6 col-sm-6 aside__images-column">
						<a href="/"><img src="img/aside__images/aside2.jpg" alt=""/></a>
					</div>
					<div className="col-xs-6 col-sm-6 aside__images-column">
						<a href="/"><img src="img/aside__images/aside3.jpg" alt=""/></a>
					</div>
					<div className="col-xs-6 col-sm-6 aside__images-column">
						<a href="/"><img src="img/aside__images/aside4.jpg" alt=""/></a>
					</div>
				</div>
			</div>
			<div className="aside__categories">
				<h2 className="subtitle">categories</h2>
			<div className="row">
				<div className="col-xs-6 col-sm-6">
					<ul className="aside__categories-list">
						<li><a href="/">Inspiration</a></li>
						<li><a href="/">Technology</a></li>
						<li><a href="/">Freebies</a></li>
						<li><a href="/">Wordpress</a></li>
						<li><a href="/">Tutorials</a></li>
						<li><a href="/">Fonts</a></li>
						<li><a href="/">Wallpapers</a></li>
					</ul>
				</div>
				<div className="col-xs-6 col-sm-6">
					<ul className="aside__categories-list">
						<li><a href="/">Inspiration</a></li>
						<li><a href="/">Technology</a></li>
						<li><a href="/">Freebies</a></li>
						<li><a href="/">Wordpress</a></li>
						<li><a href="/">Tutorials</a></li>
						<li><a href="/">Fonts</a></li>
						<li><a href="/">Wallpapers</a></li>
					</ul>
				</div>
			</div>
			</div>
			<div className="aside__latest-post">
				<h2 className="subtitle">Latest Post</h2>
				<div className="aside__latest-post-item">
					<img src={latest1} alt=""/>
					<div className="aside__latest-post-text"><a href="/">Request a quote form PSD in 3 colors</a></div>
				</div>
				<div className="aside__latest-post-item">
					<img src={latest2} alt=""/>
					<div className="aside__latest-post-text"><a href="/">Thanksgiving greeting card PSD</a></div>
				</div>
				<div className="aside__latest-post-item">
					<img src={latest3} alt=""/>
					<div className="aside__latest-post-text"><a href="/">Vintage business card PSD (front & back)</a></div>
				</div>
				<div className="aside__latest-post-item">
					<img src={latest4} alt=""/>
					<div className="aside__latest-post-text"><a href="/">Free xHTML/CSS website template</a></div>
				</div>
				<div className="aside__latest-post-item">
					<img src={latest5} alt=""/>
					<div className="aside__latest-post-text"><a href="/">fruit illustration, fresh lemon PSD</a></div>
				</div>
				<div className="aside__latest-post-item">
					<img src={latest6} alt=""/>
					<div className="aside__latest-post-text"><a href="/">Wooden speakers PSD & icons</a></div>
				</div>
			</div>
			<div className="aside__faccebook-integration">
				<div className="fb-page" data-href="https://www.facebook.com/GraphicsFuel-140485449323027/" data-tabs="timeline" data-width="300" data-height="200" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/GraphicsFuel-140485449323027/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/GraphicsFuel-140485449323027/">GraphicsFuel</a></blockquote></div>
			</div>
			<div className="aside__banner">
				<img src={banner2} alt=""/>
			</div>
			<div className="aside__videos">
				<h2 className="subtitle">Videos</h2>
				<div className="aside__video-block">
					<iframe width="100%" height="215" src="https://www.youtube.com/embed/Pbuy5CQJymM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="vidos"> </iframe>
				</div>
			</div>
		</aside>
	)
}

export default Aside