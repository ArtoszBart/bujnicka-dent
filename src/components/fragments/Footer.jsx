import React from 'react';

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
				<a className='text-link' href='/'>
					<span className='nowrap'>Bujnicka-Dent.pl</span>
				</a>
			</p>
			<p>
				Developed by <span className='nowrap'>Bartosz Art</span>
			</p>
		</footer>
	);
}

export default Footer;
