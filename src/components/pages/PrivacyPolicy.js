import React from 'react'
import ParallaxBaner from '../fragments/ParallaxBanner';

const PrivacyPolicy = () => {
  return (
	<main className="page-wrapper" role="main">
		<ParallaxBaner id="privacy-policy" text="Polityka Prywatności" />
		<article className="privacy-policy">
			<section>
				<h2><abbr title="Rozporządzenia o Ochronie Danych Osobowych">RODO</abbr></h2>
				<p>
					Przekazane przez Państwa dane osobowe będą przetwarzane przez:
				</p>
				<address>
					Gabinet Stomatologiczny Magdalena Bujnicka <br/>
					ul.Andersena 6<br/>
					01-911 Warszawa<br/>
					NIP 118 016 37 66
				</address>	
				<p>
					w celach związanych z udzielaniem usług medycznych. 
				</p>
				<p>
						
					Przysługuje Państwu prawo żądania od administratora danych dostępu do swoich danych, ich sprostowania, usunięcia lub 
					ograniczenia przetwarzania, a także prawo wniesienia skargi do organu nadzorczego. Odbiorcami danych mogą być podmioty zajmujące się 
					obsługą informatyczną lub marketingową administratora danych. Więcej informacji w dokumencie 
					"Ochrona danych osobowych" dostępnym na miejscu.
				</p>
			</section>
			<section>
				<h2>W jakim celu nam Państwa dane osobowe?</h2>

				<h3>Formularz kontaktowy</h3>
				<ul>
					<li>
						<b>Imię i nazwisko</b> - abyśmy mogli skojarzyć z kim piszemy jeśli znamy nadawcę wiadomości, 
						oraz aby móc rozpoznać użycie zwrotu Pan/Pani
					</li>
					<li>
						<b>Email</b> - potrzebny do udzielenia odpowiedzi
					</li>
				</ul>

				<h3>Zapis na wizytę</h3>
				<ul>
					<li>
						<b>Imię i nazwisko</b> - abyśmy mogli skojarzyć osobę, która się umawia w celu przeglądu karty pacjenta przed wizytą
					</li>
					<li>
						<b>Numer telefonu</b> - potrzebny do kontaktu z pacjentem w celu weryfikacji, przełożenia, lub odwołania wizyty
					</li>
					<li>
						<b>Opis (opcjonalny)</b> - może być przydatny do lepszpszego przygotowania się lekarza do wizyty
					</li>
				</ul>
			</section>
			<section>
				<h2>Jak długo przetrzymujemy dane osobowe?</h2>

				<h3>Formularz kontaktowy</h3>
				<p>W przypadku formularza kontaktowego, dane nie zostają zapisane w naszej bazie danych.</p>

				<h3>Zapis na wizytę</h3>
				<p>
					Dane pacjenta zapisanego na wizytę pozostają w naszej bazie danych do końca dnia, w którym ma odbyć się wizyta.
					Pod koniec tego dnia, dane zostają usunięte z bazy danych.
				</p>
			</section>
		</article>
	</main>
  )
}

export default PrivacyPolicy