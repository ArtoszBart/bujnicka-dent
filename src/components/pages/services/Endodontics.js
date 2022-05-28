import { useState } from "react";
import ImportantInfo from '../../fragments/pages/ImportantInfo';
import CarPhoto from '../../../img/samochut.jpg';
import ImgEquipment from '../../../img/offers/offer_endodontics.jpeg';
import ParallaxBaner from '../../fragments/ParallaxBanner'
import Modal from './../../fragments/Modal';

function Endodontics() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => {
		setIsModalOpen(true);
	}

	return (
		<main className="page-wrapper" role="main">
			<ParallaxBaner id="endodontics" text="Endodoncja" />
			<article className="page-content">
				<section aria-labelledby="what-is-endodontics">
					<h2 id="what-is-endodontics">Czym zajmuje się Endodoncja?</h2>
					<p>
						<dfn>Endodoncja</dfn> - potocznie nazywana <b>leczeniem kanałowym</b> - jest dziedziną stomatologii zachowawczej
						zajmującą się leczeniem miazgi wypełniającej komorę i kanały zębowe. W zależności od rodzaju
						zęba, <b>kanałów w zębie może być od 1 do 5</b> i więcej (np. górne zęby szóste mają najczęściej 5 kanałów, a kły - jeden).
					</p>
					<p>
						Nieleczone ubytki próchnicze z czasem przekształcają się w <b>poważne ubytki</b> obejmujące kolejne tkanki zęba,
						z czasem docierające do jego centrum - <dfn>miazgi</dfn>. Tutaj znajdujące się w próchnicy bakterie szybko namnażają
						się i powodują <b>zapalenie miazgi</b>, dające silne objawy
						bólowe i <b>konieczność</b> przeprowadzenia <b>natychmiastowego leczenia kanałowego</b>.
					</p>
					<p>
						Czasami rozwijająca się próchnica doprowadza do bezobjawowej martwicy
						miazgi. <b>Chora miazga powinna zostać jak najszybciej usunięta</b>, ponieważ bakterie mogą rozprzestrzeniać się
						poza kanał zęba do kości i spowodować <b>zapalenie kości</b> w okolicy wierzchołka korzenia zęba.
					</p>
					<div className="text-img normal">
						<div className="photos">
							<div className="page-photo">
								<img src={CarPhoto} alt="" />
								<span>Kanały</span>
							</div>
						</div>
						<div>
							<h3>Wskazania do leczenia endodontycznego:</h3>
							<ul>
								<li><b>Zapalenie miazgi</b></li>
								<li><b>Martwica miazgi</b></li>
								<li><b>Zapalenie kości</b> okolicy przywierzchołkowej zęba, tzw. zmiany zapalne okołowierzchołkowe</li>
								<li>Procesy chorobowe w obrębie wnętrza zęba jako <b>powikłania chorób przyzębia</b></li>
								<li><b>Odsłonięta miazga</b> z powodu urazu mechanicznego</li>
								<li>
									<b>Wskazania protetyczne</b> gdy rozległe zniszczenie części koronowej zęba uniemożliwia
									stworzenie retencji pod odbudowę protetyczną
								</li>
							</ul>
						</div>
					</div>
				</section>
				<section aria-labelledby="endodontics-process">
					<h2 id="endodontics-process">Przebieg leczenia endodontycznego:</h2>
					<h3>Leczenie endodontyczne polega na:</h3>
					<ol>
						<li><p><b>Usunięciu chorej miazgi</b></p></li>
						<li><p>Mechanicznym <b>poszerzeniu kanałów</b> narzędziami ręcznymi i maszynowymi</p></li>
						<li><p><b>Dezynfekcji</b> specjalnym zestawem środków odkażających</p></li>
						<li>
							<p>
								<b>Wypełnieniu kanałów</b> gutaperką i materiałem uszczelniającym. Nowoczesne preparaty do wypełniania
								kanałów tworzą z zębem szczelny konglomerat, który zapobiega kontaktowi wnętrza zęba z resztą organizmu
							</p>
						</li>
					</ol>
					<ImportantInfo>
						Zabieg wykonuje się w <b>znieczuleniu miejscowym</b> i z udziałem <b>diagnostyki rentgenowskiej</b>, zarówno przed,
						w trakcie jak i po leczeniu. Procedura postępowania jest czasochłonna, wymagająca kosztownego instrumentarium i
						dużych umiejętności lekarza.
					</ImportantInfo>
					<p>
						Nowoczesna endodoncja wykorzystuje <b>szereg zaawansowanych technologicznie urządzeń</b>, np.:
					</p>
					<ul>
						<li><dfn>Endometr</dfn> - służy do pomiaru długości kanałów korzeniowych</li>
						<li><dfn>Tomografię komputerową</dfn> - umożliwia ocenę anatomii zęba w wymiarach 3D</li>
						<li><dfn>Mikroskop</dfn> - pozwalaja na pracę wewnątrz kanałów pod kontrolą wzroku lekarza</li>
					</ul>
					<p>
						W sytuacji, kiedy leczenie endodontyczne <b>nie przyniosło oczekiwanych rezultatów</b>, np:
					</p>
					<ul>
						<li>ponownie wystąpiły <b>objawy bólowe</b></li>
						<li>
							<b>kanały zostały reinfekowane</b> z powodu braku prawidłowego zabezpieczenia zęba po leczeniu lub
							zaniechania postępowania leczniczego przez pacjenta
						</li>
						<li>kanały <b>nie zostały prawidłowo wypełnione</b></li>
						<li>rozwinęły się <b>zmiany zapalne w kości</b></li>
					</ul>
					<p>
						wykonuje się powtórne leczenie endodontyczne, tzw. REENDO. Jest ono bardziej skomplikowane, a co za tym idzie
						bardziej czasochłonne i kosztowne niż leczenie pierwotne. Warto jest więc zainwestować w nowoczesne procedury
						lecznicze i doprowadzić leczenie do końca.
					</p>
				</section>
				<section aria-labelledby="why-endodontics">
					<h2 id="why-endodontics">Dlaczego warto podjąć leczenie kanałowe?</h2>
					<p>
						Pacjenci często nie podejmują leczenia kanałowego ze względu na koszty finansowe tego zabiegu. Doprowadza to
						do <b>całkowitego zniszczenia zęba</b> i konieczności <b>usunięcia go</b>. Uzupełnienie brakującego zęba metodami protetycznymi -
						mostem lub implantem, jest zdecydowanie <b>bardziej inwazyjne</b> ze względu na konieczność szlifowania <span className='text-link' onClick={openModal}>zębów filarowych</span> w
						przypadku mostu lub wykonania inwazyjnego zabiegu chirurgicznego w przypadku implantów.
					</p>
					<p>
						Żadne uzupełnienie protetyczne <b>nie jest w stanie zastąpić naturalnego zęba</b>. Leczenie kanałowe jest zabiegiem
						kosztownym, jednak w porównaniu do zabiegów protetycznych jest <b>zdecydowanie tańszym rozwiązaniem</b>.
					</p>
					<p>
						Ponadto <b>trudno jest oszacować koszt takiego leczenia</b> przed jego rozpoczęciem, ponieważ:
					</p>
					<ul>
						<li>nigdy nie ma do końca pewności, że dany ząb będzie posiadał przewidywaną ilość kanałów</li>
						<li>zmiany zapalne w kości mogą spowodować konieczność większej ilości wizyt</li>
					</ul>
					<ImportantInfo>
						Warto jest zadbać o to, aby zachować <b>jak największą ilość swoich własnych zębów</b>.
					</ImportantInfo>
				</section>
				<Modal
					title='Ząb filarowy'
					image={CarPhoto}
					alt=""
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
				>
					Ząb, na którym oparty jest most, czyli ząb będący filarem mostu.
				</Modal>
			</article>
		</main>
	);
}

export default Endodontics;
