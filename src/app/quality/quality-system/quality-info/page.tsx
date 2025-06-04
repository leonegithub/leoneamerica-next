import productLabels from "./Product-label-symbols-1.png";
import Image from "next/image";

export default function QualityInfo() {
  return (
    <div className="container">
      <h1 className="blue py-3 font-bold">Product label symbols</h1>
      <p>
        The label on the package of any medical device set on the market will
        show the symbols in compliance with the harmonized standards. The
        symbols marked with a single (*) are based on the ISO 21531, ISO 15223-1
        and on the 93/42EEC Directive. The symbols marked with double (**) have
        been instead adapted by Leone.
      </p>
      <Image className="py-4" src={productLabels} alt="product-labels"></Image>
      <p className="italic">
        *Unless otherwise indicated, the LOT number explains the date of
        manufacture with the key YYMMDDNN (YY year, MM month, DD day, NN Leone
        progressive internal number of the lot). For example: 18021902 indicates
        the lot no. 2 of February 19, 2018.
      </p>
    </div>
  );
}
