import "./TabelloniPunti.css";
import logoPrimaSquadra from "../../assets/immagini/ACCADEMIA_BENEVENTO.jpg";
import logoSecondaSquadra from "../../assets/immagini/ASD_PALLAVOLO_POZZUOLI.png";

const TabelloniPunti$ = () => {
  return (
    <>
      <div class="tabellone_container">
        <div class="tabellone_content">
          <div class="logo_squadre">
            <img class="logo" src={logoPrimaSquadra} alt="Prima Squadra" width={60} height={60} />
            <img class="logo" src={logoSecondaSquadra} alt="Prima Squadra" width={60} height={60} />
          </div>
          <div class="nome_squadre">
            <span>ACCADEMIA BENEVENTO</span>
            <span>GREENERGY CASTELLANETA</span>
          </div>
          <div class="punteggio">
            <span> 0 | 10 | 5</span>
            <span> 0 | 10 | 5 | 4 | 6 </span>
          </div>
          <div class="possesso_palla">
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>
        <div class="set_timer">
          <span class="set">1 set</span>
          <span class="timer">00 : 00</span>
        </div>
        {/*   <div class="squadre">
          <div class="prima_squadra">
            <div class="squadra_titolo">
              <img class="logo" src={logoPrimaSquadra} alt="Prima Squadra" width={60} height={60} />
              <span class="nome_squadra">ACCADEMIA BENEVENTO</span>
            </div>
            <span class="punteggio"> 0 | 10 | 5</span>
            <span class="possesso_palla"></span>
          </div>
          <div class="seconda_squadra">
            <div class="squadra_titolo">
              <img class="logo" src={logoSecondaSquadra} alt="Prima Squadra" width={60} height={60} />
              <span class="nome_squadra">GREENERGY CASTELLANETA</span>
            </div>
            <span class="punteggio"> 0 | 10 | 5</span>
            <span class="possesso_palla"></span>
          </div>
        </div>
        */}
      </div>
    </>
  );
};

export default TabelloniPunti$;
