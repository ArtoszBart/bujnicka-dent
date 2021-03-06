import React from "react"

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
			<p>&copy; {getCopyrightYears()} <a className="text-link" href="/"><span className="nowrap">Bujnicka-Dent.pl</span></a></p>
			<p>Made by <a className="text-link" href="http://52.174.165.195/" target="_blank" rel="noreferrer"><span className="nowrap">Bartosz Art</span></a></p>
		</footer>
	)
}

export default Footer