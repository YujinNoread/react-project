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
				
				postsData.filter((post)=> needFilter ? post.category===name : post).map(({
					id,
					image,
					user,
					comments,
					title,
					category,
					text,
				})=>(
					<PostListItem key={id}
						id={id}
						image={image}
						user={user}
						comments={comments}
						title={title}
						category={category}
						text={text}
					/>
				))
			}
		</div>
	)
}



export default PostList