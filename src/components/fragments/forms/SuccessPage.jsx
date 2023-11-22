import React from 'react';
import { formatDateLong } from '../../../helpers/dateAndTime';

function SuccessPage({ values, doctor }) {
	return (
		<div>
			<h2>Zapisano na wizytę</h2>
			<p>
				Lekarz: {doctor.firstName} {doctor.lastName}
			</p>
			<p>Data: {formatDateLong(new Date(values.date))}</p>
			<p>Godzina: {values.date.split(' ')[1]}</p>
			<p>
				Adres: Warszawa, Andersena 6, domofon 200, 12 piętro, z windy w
				lewo
			</p>
		</div>
	);
}

export default SuccessPage;
