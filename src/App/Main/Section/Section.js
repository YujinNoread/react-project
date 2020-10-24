import React from 'react'
import sliderItem from './img/slider1.jpg'
import post1 from './img/post1.jpg'
import post2 from './img/post2.jpg'
import post3 from './img/post3.jpg'
import post4 from './img/post4.jpg'
import random1 from './img/random1.png'
import random2 from './img/random2.png'
import random3 from './img/random3.png'
import random4 from './img/random4.png'
import random5 from './img/random5.png'
import random6 from './img/random6.png'

const Section = () => {
	return(
		<section className="section col-xs-12 col-sm-8">
			<div className="section__slider">
				<div className="slider__item">
					<img src={sliderItem} alt=""/>
				</div>
			</div>
			<div className="section__posts">
				<div className="post__item">
					<div className="row">
						<div className="col-xs-3 col-sm-4 post__img">
							<img src={post1} alt=""/>
						</div>
						<div className="col-xs-9 col-sm-8 post__body">
							<div className="post__info">
								<div className="post__user"><span>Admin</span> - Nov 28th, 2010</div>
								<div className="post__coment">10 Comments</div>
							</div>
							<div className="post__title"><a href="/">Thanksgiving greeting card PSD</a></div>
							<div className="post__category"><a href="/">Insipration</a> - Category</div>
							<div className="post__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum malesuada orci a commodo. Aenean dapibus urna quis nulla consequat sagittis. Quisque ut ultrices massa. Mauris felis felis, rutrum sit amet vehicula ut, tempus quis lectus. . </div>
							<div className="post__link"><a href="/">Read More</a></div>
						</div>
					</div>
				</div>
				<div className="post__item">
					<div className="row">
						<div className="col-xs-3 col-sm-4 post__img">
							<img src={post2} alt=""/>
						</div>
						<div className="col-xs-9 col-sm-8 post__body">
							<div className="post__info">
								<div className="post__user"><span>Admin</span> - Nov 28th, 2010</div>
								<div className="post__coment">10 Comments</div>
							</div>
							<div className="post__title"><a href="/">Vintage business card PSD (front & back)</a></div>
							<div className="post__category"><a href="/">Technology</a> - Category</div>
							<div className="post__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum malesuada orci a commodo. Aenean dapibus urna quis nulla consequat sagittis. Quisque ut ultrices massa. Mauris felis felis, rutrum sit amet vehicula ut, tempus quis lectus. . </div>
							<div className="post__link"><a href="/">Read More</a></div>
						</div>
					</div>
				</div>
				<div className="post__item">
					<div className="row">
						<div className="col-xs-3 col-sm-4 post__img">
							<img src={post3} alt=""/>
						</div>
						<div className="col-xs-9 col-sm-8 post__body">
							<div className="post__info">
								<div className="post__user"><span>Admin</span> - Nov 28th, 2010</div>
								<div className="post__coment">10 Comments</div>
							</div>
							<div className="post__title"><a href="/">Request a quote form PSD in 3 colors</a></div>
							<div className="post__category"><a href="/">Freebies</a> - Category</div>
							<div className="post__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum malesuada orci a commodo. Aenean dapibus urna quis nulla consequat sagittis. Quisque ut ultrices massa. Mauris felis felis, rutrum sit amet vehicula ut, tempus quis lectus. . </div>
							<div className="post__link"><a href="/">Read More</a></div>
						</div>
					</div>
				</div>
				<div className="post__item">
					<div className="row">
						<div className="col-xs-3 col-sm-4 post__img">
							<img src={post4} alt=""/>
						</div>
						<div className="col-xs-9 col-sm-8 post__body">
							<div className="post__info">
								<div className="post__user"><span>Admin</span> - Nov 28th, 2010</div>
								<div className="post__coment">10 Comments</div>
							</div>
							<div className="post__title"><a href="/">PSD book template & icons</a></div>
							<div className="post__category"><a href="/">Wordpress</a> - Category</div>
							<div className="post__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum malesuada orci a commodo. Aenean dapibus urna quis nulla consequat sagittis. Quisque ut ultrices massa. Mauris felis felis, rutrum sit amet vehicula ut, tempus quis lectus. . </div>
							<div className="post__link"><a href="/">Read More</a></div>
						</div>
					</div>
				</div>
				<div className="section__navigation">
					<ul className="pages">
						<li><a href="/">1</a></li>
						<li><a href="/">2</a></li>
						<li><a href="/">3</a></li>
						<li><a href="/">4</a></li>
						<li><a href="/">75</a></li>
					</ul>
					<div className="pages__button">Next</div>
				</div>
			</div>
			<div className="row section__row">
				<div className="col-xs-12 col-sm-6">
					<div className="user__news">
						<h2 className="subtitle">user news</h2>
						<div className="news__post">
							<div className="news__title"><a href="/">Thanksgiving greeting card PSD</a></div>
							<div className="news__info">November 29, 2010 by <span>Admin</span></div>
							<div className="news__text">GraphicsFuel wishes you and your family Happy Thanksgiving. As the Thanksgiving season is.</div>
						</div>
						<div className="news__post">
							<div className="news__title"><a href="/">Vintage business card PSD (front & back)</a></div>
							<div className="news__info">November 29, 2010 by <span>Admin</span></div>
							<div className="news__text">Friends, today’s PSD download is a vintage business card Photoshop PSD download.</div>
						</div>
						<div className="news__post">
							<div className="news__title"><a href="/">Fruit illustration, fresh lemon PSD</a></div>
							<div className="news__info">November 29, 2010 by <span>Admin</span></div>
							<div className="news__text">Today’s amazing PSD download is a fruit illustration of fresh lemon graphic in Photoshop PSD...</div>
						</div>
						<div className="news__post">
							<div className="news__title"><a href="/">Request a quote form PSD in 3 colors</a></div>
							<div className="news__info">November 29, 2010 by <span>Admin</span></div>
							<div className="news__text">Friends, today’s PSD download is a set of “Request a Quote” form in Photoshop PSD format</div>
						</div>
					</div>
					<div className="news__link"><a href="/">Read More News</a></div>
					<div className="news__submit">Submit News</div>
				</div>
				<div className="col-xs-12 col-sm-6">
					<div className="random__inspiration">
						<h2 className="subtitle">random inspiration</h2>
						<div className="row random__inspiration-row">
							<div className="col-xs-4 col-sm-4 random__inspiration-column">
								<img src={random1} alt=""/>
							</div>
							<div className="col-xs-4 col-sm-4 random__inspiration-column">
								<img src={random2} alt=""/>
							</div>
							<div className="col-xs-4 col-sm-4 random__inspiration-column">
								<img src={random3} alt=""/>
							</div>
							<div className="col-xs-4 col-sm-4 random__inspiration-column">
								<img src={random4} alt=""/>
							</div>
							<div className="col-xs-4 col-sm-4 random__inspiration-column">
								<img src={random5} alt=""/>
							</div>
							<div className="col-xs-4 col-sm-4 random__inspiration-column">
								<img src={random6} alt=""/>
							</div>
						</div>
					</div>
					<div className="flickr__group">
						<h2 className="subtitle">flickr group</h2>
						<div className="row flickr__group-row">
							<div className="col-xs-4 col-sm-4 flickr__group-column">
								<img src={random1} alt=""/>
							</div>
							<div className="col-xs-4 col-sm-4 flickr__group-column">
								<img src={random2} alt=""/>
							</div>
							<div className="col-xs-4 col-sm-4 flickr__group-column">
								<img src={random3} alt=""/>
							</div>
							<div className="col-xs-4 col-sm-4 flickr__group-column">
								<img src={random4} alt=""/>
							</div>
							<div className="col-xs-4 col-sm-4 flickr__group-column">
								<img src={random5} alt=""/>
							</div>
							<div className="col-xs-4 col-sm-4 flickr__group-column">
								<img src={random6} alt=""/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Section