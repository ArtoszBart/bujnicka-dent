import React from 'react';
import { Link } from 'react-router-dom';
import ImgLoadingLink from './ImgLoadingLink';

const SingleOffer = ({ image, title, link, children }) => {
	return (
		<div className='offers-single'>
			<ImgLoadingLink to={link} src={image} alt={title}></ImgLoadingLink>

			<h3>{title}</h3>
			<p>{children}</p>
			<Link to={link} className='button'>
				Zobacz więcej
			</Link>
		</div>
	);
};

export default SingleOffer;
