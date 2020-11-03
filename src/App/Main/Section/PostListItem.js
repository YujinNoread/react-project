import React from 'react'
import { Link } from 'react-router-dom'

const PostListItem = ({
	id,
	image,
	user,
	comments,
	title,
	category,
	short_text,
	addFilterByCategory
}) => {
	return(
		<div className="post__item" key={id}>
			<div className="row">
				<div className="col-xs-3 col-sm-4 post__img">
					<img src={window.location.origin + image} alt=""/>
				</div>
				<div className="col-xs-9 col-sm-8 post__body">
					<div className="post__info">
						<div className="post__user"><span>{user}</span> - Nov 28th, 2010</div>
						<div className="post__coment">{comments} Comments</div>
					</div>
					<div className="post__title">
						<Link to={`/posts/${id}`}>
							{title}
						</Link>
					</div>
					<div className="post__category" onClick={()=>addFilterByCategory(category)}>{category} - Category</div>
					<div className="post__text">{short_text}</div>
					<div className="post__link"><a href="/">Read More</a></div>
				</div>
			</div>
		</div>
	)
}

export default PostListItem