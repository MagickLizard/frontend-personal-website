import React from 'react';

const Card = ({ content }) => {
	return (
		<div className='card'>
			<div className='card-content'>
				<div className='content'>{content}</div>
			</div>
		</div>
	);
};
export default Card;
