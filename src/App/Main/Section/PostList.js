import React from 'react'
import postsData from './PostData'
import PostListItem from './PostListItem'

const PostList = ({
	needFilter,
	name,
}) => {
	return (
		<div className="section__posts">
			{
				
				postsData.filter((post)=> needFilter ? post.category===name : post).slice(0,7).map(({
					id,
					image,
					user,
					comments,
					title,
					category,
					short_text,
				})=>(
					<PostListItem key={id}
						id={id}
						image={image}
						user={user}
						comments={comments}
						title={title}
						category={category}
						short_text={short_text}
					/>
				))
			}
		</div>
	)
}



export default PostList