import React from 'react';
import { Link } from 'react-router-dom';
import Collapsible from '../fragments/collapsible/Collapsible';
import ParallaxBaner from '../fragments/ParallaxBanner';
import ImportantInfo from '../fragments/pages/ImportantInfo';
import PillarToothModal from '../fragments/modals/PillarToothModal';
import useModal from '../fragments/customHooks/useModal';

const Faq = () => {
    const UseModal = useModal();
    return (
        <main className="page-wrapper" role="main">
            <ParallaxBaner id="faq" text="Często Zadawane Pytania" />
            <article className="page-content">
                <Collapsible question="Kiedy można zacząć jeść po wizycie w gabinecie stomatologicznym?">
                    <p>
                        Zasada jest następująca:
                    </p>
                    <p>
                        Jeśli leczenie zęba jest w toku, a wizyta zakończona jest:
                    </p>
                    <ul>
                        <li><b>wypełnieniem tymczasowym</b>, np. przy leczeniu kanałowym lub biologicznym miazgi zęba</li>
                        <li>założeniem <b>koron tymczasowych</b> przy leczeniu protetycznym</li>
                    </ul>
                    <p>
                        to nie można jeść około 1-2 godzin.
                    </p>
                    <p>
                        W większości pozostałych przypadków jeść można od razu po wyjściu z gabinetu. <b>Wyjątkiem</b> są sytuacje aplikacji lekarstwa
                        np. bezpośrednio do zębodołu lub kieszonki dziąsłowej.
                    </p>
                    <ImportantInfo>
                        Należy uważać w sytuacji, kiedy zostało podane <b>znieczulenie</b>, szczególnie w żuchwie,
                        ponieważ brak czucia może być powodem <b>poważnego pogryzienia języka lub policzków</b>.
                    </ImportantInfo>
                </Collapsible>

                <Collapsible question="Czy pozbywać się zębów mądrości?">
                    <p>
                        Zęby mądrości, czyli zęby ósme, są żródłem <b>wielu problemów</b>, których powodem
                        jest <b>umiejscowienie anatomiczne</b> oraz <b>trudności w dostępie przy szczotkowaniu</b>.
                    </p>
                    <p>
                        Jeśli powtarzają się problemy typu:
                    </p>
                    <ul>
                        <li>zapalenie głebokich kieszeni</li>
                        <li>stany ropne powierzchowne i głębokie</li>
                    </ul>
                    <p>
                        trzeba rozważyć zabieg ekstrakcji.
                    </p>
                    <p>
                        Często też <b>leczenie kanałowe ósemek jest technicznie niewykonalne</b>. Podejmuje się wtedy również decyzję o ich usunięciu.
                        Również czasem zachodzi konieczność ich usunięcia przy <b>leczeniu ortodontycznym</b> lub
                        przy <Link className="text-link" to='/offer/joints'>schorzeniach stawu skroniowo-żuchwowego</Link>.
                    </p>
                    <p>
                        Natomiast jeśli nie sprawiają żadnych kłopotów, są prawidłowo umiejscowione i ustawione, to <b>spokojnie możemy je pozostawić</b>.
                        Mogą okazać się <b>bardzo przydatne</b> w sytuacji konieczności wykonania mostu protetycznego, służąc jako <span className="text-link" onClick={() => UseModal.openModal("Ząb filarowy")}>zęby filarowe</span> do jego podparcia.
                    </p>
                    <p>
                        <Link className="text-link" to='/offer/dental-surgery'>Więcej o usuwaniu ósemek</Link>
                    </p>
                </Collapsible>

                <Collapsible question="Lakowanie czy lakierowanie?">
                    <p>
                        Obydwa zabiegi należą do <b>profilaktyki próchnicy</b>.
                    </p>
                    <h4>Lakowanie</h4>
                    <p>
                        Wykonuje się <b>głównie u dzieci</b>, u których wyrżnęły się już zęby stałe. Ze względu na bardzo rozwiniętą anatomicznie
                        powierzchnię żującą tych zębów, wskazane jest <b>zabezpieczenie ich przed płytką nazębną</b>.
                    </p>
                    <p>
                        Dzieci nie mają jeszcze rozwiniętej świadomości o konieczności <b>regularnej higieny jamy ustnej</b>, a
                        rodzice <b>nie zawsze mogą dopilnować</b> przestrzegania jej zasad. Zabieg taki skutecznie zapobiegnie
                        rozwojowi <b>pierwszych ubytków próchniczych</b> u dziecka i konieczności wizyty z powodu bólu zęba.
                    </p>
                    <h4>Lakierowanie</h4>
                    <p>
                        Dotyczy pacjentów <b>dorosłych</b> i jest niewskazane u małych dzieci z powodu szkodliwości związków fluoru.
                    </p>
                    <p>
                        <Link className="text-link" to="/offer/prevention">Więcej o profilaktyce</Link>
                    </p>
                </Collapsible>

                <Collapsible question="Co zrobić kiedy wchodzi jedzenie pomiędzy zęby?">
                    <p>
                        Pozostające jedzenie pomiędzy zębami to <b>bardzo częsty problem</b> pacjentów. Wynika
                        on <b>z braku prawidłowych powierzchni stycznych</b> pomiędzy zębami zarówno z <b>powodów anatomicznych</b>, jak
                        i nieprawidłowego postępowania lekarza. Może też wystąpić jako <b>efekt uboczny nieuzupełnienia brakującego zęba</b>,
                        co powoduje przesuwanie się zębów sąsiednich.
                    </p>
                    <p>
                        <b>Rozwiązaniem problemu</b> jest <Link className="text-link" to="/offer/aesthetic-dentistry">wymiana wypełnień</Link> na
                        powierzchniach stycznych zębów, pomiędzy którymi pozostaje jedzenie
                        lub <Link className="text-link" to="/offer/aesthetic-dentistry">wykonanie licówek</Link> zmieniających kształt zębów,
                        jeśli problem dotyczy zębów przednich.
                    </p>
                    <p>
                        Doraźnie trzeba wspomagać się <b>nitką międzyzębową lub wykałaczką</b>.
                    </p>
                </Collapsible>

                <Collapsible question="Kiedy robi się odbudowę zęba, a kiedy koronę protetyczną?">
                    <p>
                        <b>Decyzję o wyborze</b> rodzaju odtworzenia brakujących tkanek zęba <b>podejmuje lekarz</b>.
                        Ocenia on, czy ilość zdrowych tkanek jest wystarczająca do wykonania odbudowy kompozytowej.
                    </p>
                    <p>
                        Przeważnie zniszczenie do &frac12; części widocznej zęba jest <b>ilością graniczną do jego odbudowy</b>.
                        Przy <b>zniszczeniach o większym zasięgu</b>, ze względów wytrzymałościowych, wykonuje
                        się <Link className="text-link" to="/offer/inlay-onlay">overlay, endokoronę</Link> lub <Link className="text-link" to="/offer/prosthodontics">koronę protetyczną</Link>.
                    </p>
                </Collapsible>

                <Collapsible question="Czy można spać w protezach?">
                    <p>
                        Można.
                    </p>
                    <p>
                        Jednak <b>zaleca się wyjmowanie protez na noc</b>, szczególnie tych o dużym zasięgu,
                        umożliwiając <b>lepsze ukrwienie błony śluzowej</b>, gdy nie jest ona uciśnięta przez protezę.
                    </p>
                    <p>
                        <Link className="text-link" to="/offer/prosthodontics">Więcej o protezach</Link>
                    </p>
                </Collapsible>

                <Collapsible question="Czy typowy jest ból występujący po wypełnieniu kanałów?">
                    <p>
                        Tak, po wypełnieniu kanałów <b>może wystąpić uczucie dyskomfortu</b> lub nawet <b>ból wypełnionego zęba</b>.
                    </p>
                    <p>
                        Wynika to z faktu, że podczas przygotowywania zęba do wypełnienia <b>kanały płucze się</b> dużą ilością <b>drażniących substancji odkażających</b>,
                        które mogą przedostać się poza ząb do kości.
                    </p>
                    <p>
                        Kość jest unerwiona i może zareagować <b>dając uczucie podrażnienia</b> wypełnionego zęba.
                    </p>
                    <p>
                        <Link className="text-link" to="/offer/endodontics">Więcej o leczeniu kanałowym</Link>
                    </p>
                </Collapsible>

                <PillarToothModal hook={UseModal} />
            </article>
        </main>
    );
};

export default Faq;