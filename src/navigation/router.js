import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

export default (
	<Routes>
		<Route path='/o-nas' />
		<Route path='/oferta' />
		<Route path='/cennik' />
		<Route path='/certyfikaty' />
		<Route path='/czesto-zadawane-pytania' />
		<Route path='/kontakt' />

		<Route path='/oferta/stomatologia-estetyczna' />
		<Route path='/oferta/stomatologia-zachowawcza' />
		<Route path='/oferta/chirurgia-stomatoligiczna' />
		<Route path='/oferta/wizyta-diagnostyczna' />
		<Route path='/oferta/stomatologia-cyfrowa' />
		<Route path='/oferta/endodoncja' />
		<Route path='/oferta/implanty' />
		<Route path='/oferta/leczenie-stawów-skroniowo-zuchwowych' />
		<Route path='/oferta/inlay-onlay-overlay-endokorony' />
		<Route path='/oferta/periodontologia' />
		<Route path='/oferta/profilaktyka' />
		<Route path='/oferta/protetyka' />

		<Route path='/polityka-prywatności' />
	</Routes>
);
