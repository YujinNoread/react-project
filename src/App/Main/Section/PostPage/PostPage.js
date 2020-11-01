import React from 'react'
import postsData, { getPostsMap } from '../PostData'
import "./PostPage.css"

const PostPage = ({
	match,
	postsMap=getPostsMap(postsData),
}) => {
	const id=match.params.postId;
	return (
		<>
			<h1 className="title">{postsMap[id].title}</h1>
			<img src={postsMap[id].img} alt={postsMap[id].category} className="image"/>
			<div className="text"dangerouslySetInnerHTML={{
				__html:postsMap[id].full_text
			}}></div>
		</>
	)
}

export default PostPage