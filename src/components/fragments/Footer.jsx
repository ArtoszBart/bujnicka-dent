import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	const creationDate = 2022;

	const getCopyrightYears = () => {
		const yearNow = new Date().getFullYear();
		if (yearNow === creationDate) {
			return creationDate;
		}
		return `${creationDate}-${yearNow}`;
	};

	return (
		<footer>
			<p>
				&copy; {getCopyrightYears()}{' '}
				<Link className='text-link' to='/'>
					<span className='nowrap'>Bujnicka Dent</span>
				</Link>
			</p>
			|
			<p>
				Developed by{' '}
				<span className='nowrap'>
					<a
						className='author'
						href='https://bartart.dev/'
						target='_blank'
						rel='noreferrer'
					>
						Bartosz Art
					</a>
				</span>
			</p>
		</footer>
	);
}

export default Footer;
