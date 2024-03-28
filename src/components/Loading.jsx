import React from 'react';
import CircleLoader from 'react-spinners/CircleLoader';

export default function Loading() {
	return (
		<main>
			<article className='loading'>
				<CircleLoader color='#3fbbd1' />
			</article>
		</main>
	);
}
