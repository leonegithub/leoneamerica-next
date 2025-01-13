import "./style.css";
import Image from "next/image";
import pop from "./pop.png";
import desc from "./image.png";

export default function Pop() {
  return (
    <>
      <div className="contenitore-pop d-flex flex-column align-items-center">
        <div className="container-fluid pop row">
          <div className="left col-12 col-lg-6">
            <h1 className="pop-title">
              <span>POP&reg;</span> <br /> Screw Universal
            </h1>
          </div>
          <div className="right col-12 col-lg-6">
            <Image src={pop} alt="pop"></Image>
          </div>
        </div>
        <div className="container-fluid pop row">
          <div className="left col-12 col-lg-6">
            <p className="text">
              Realizzata in acciaio e tecnopolimero per uso biomedicale. La vite
              maschio non è a contatto con la resina ortodontica: il
              funzionamento non è, quindi, influenzato né dalla qualità dell’a-
              crilico né dalla tecnica di lavorazione o dal non rispetto dei
              tempi di polimerizzazione. Spinta espansiva costante: l’iniezione
              ad alta pressione del polimero permette una perfetta ricopiatura
              della filettatura assicurando una trasmissione della forza
              espansiva costante senza rischi di disattivazione involontaria in
              bocca. Le guide rettangolari autocentranti assicurano una
              espansione biomeccanicamente controllata ed assolutamente
              simmetrica. La conformazione piatta delle guide, con la loro
              conseguente flessibilità, consente il rilascio graduale della
              spinta espansiva favorendo un movimento ortodontico fisiologico.
            </p>
          </div>
          <div className="right col-12 col-lg-6">
            <Image className="desc" src={desc} alt="desc"></Image>
          </div>
        </div>
      </div>
    </>
  );
}
