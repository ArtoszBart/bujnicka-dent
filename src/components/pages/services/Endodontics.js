import '../../../styles/main.scss';
import ImportantInfo from '../../fragments/pages/ImportantInfo';
import CarPhoto from '../../../img/samochut.jpg';

function Endodontics() {

	return (
		<main className="page-wrapper" role="main">
			<div className="banner" id="endodontics">
				<div className="banner-title">
					<h1>Endodoncja</h1>
				</div>
			</div>
			<article className="page-content">
				<section aria-labelledby="what-is-endodontics" className="page-content-text">
					<h2>Czym zajmuje się Endodoncja?</h2>
					<p>
						<dfn>Endodoncja</dfn> - potocznie nazywana <b>leczeniem kanałowym</b> - jest dziedziną stomatologii zachowawczej
						zajmującą się leczeniem miazgi wypełniającej komorę i kanały zębowe. W zależności od rodzaju
						zęba, <b>kanałów w zębie może być od 1 do 5</b> i więcej (np. górne zęby szóste mają najczęściej 5 kanałów, a kły - jeden).
					</p>
					<div className="text-img list-img">
						<div className="photos">
							<div className="page-photo">
								<img src={CarPhoto} alt="" />
								<span>Kanały</span>
							</div>
						</div>
						<div>
							<h3>Wskazania do leczenia endodontycznego:</h3>
							<ul>
								<li>
									<b>Nieleczona próchnica</b> - stopniowo obejmuje swoim zasięgiem wnętrze zęba dochodząc do miazgi i
									powodując jej zakażenie. Tutaj bakterie bardzo szybko namnażają się
									powodując <b>zapalenie miazgi</b> lub <b>martwicę</b>, co daje objawy bólowe. Chora miazga powinna zostać jak
									najszybciej usunięta, ponieważ bakterie mogą rozprzestrzeniać się poza kanał zęba do kości i
									spowodować <b>zapalenie kości</b>
								</li>
								<li>
									<b>Ubytki niepróchnicowego pochodzenia</b>, tzw. ubytki klinowe, występujące w okolicy
									przydziąsłowej - mogą wywoływać zapalenie miazgi i martwicę
								</li>
								<li>Procesy chorobowe w obrębie wnętrza zęba jako <b>powikłania chorób przyzębia</b></li>
								<li>Odsłonięta miazga z powodu <b>urazu mechanicznego</b></li>
								<li>
									<b>Wskazania protetyczne</b> - w sytuacji, gdy rozległe zniszczenie części koronowej zęba uniemożliwia
									stworzenie retencji pod odbudowę protetyczną
								</li>
							</ul>
						</div>
					</div>
				</section>
				<section aria-labelledby="endodontics-process" className="page-content-text">
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
				<section aria-labelledby="why-endodontics" className="page-content-text">
					<h2 id="why-endodontics">Dlaczego warto podjąć leczenie kanałowe?</h2>
					<p>
						Pacjenci często nie podejmują leczenia kanałowego ze względu na koszty finansowe tego zabiegu. Doprowadza to
						do <b>całkowitego zniszczenia zęba</b> i konieczności <b>usunięcia go</b>. Uzupełnienie brakującego zęba metodami protetycznymi -
						mostem lub implantem, jest zdecydowanie <b>bardziej inwazyjne</b> ze względu na konieczność szlifowania zębów filarowych w
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
			</article>
		</main>
	);
}

export default Endodontics;
