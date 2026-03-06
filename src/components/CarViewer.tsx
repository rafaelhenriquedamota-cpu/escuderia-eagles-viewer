import { useEffect, useState } from "react";
import type { CarData } from "@/pages/Index";

interface Props {
  carro: CarData;
}

const CarViewer = ({ carro }: Props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, [carro.id]);

  return (
    <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden mb-8">
      <div className="bg-primary/5 p-2">
        <h2 className="font-heading text-lg font-bold text-center text-foreground tracking-wider">
          {carro.nome}
        </h2>
      </div>
      <div className="flex items-center justify-center p-6 min-h-[300px] md:min-h-[420px]">
        <img
          src={carro.imagem}
          alt={carro.nome}
          className={`max-h-[360px] w-auto object-contain transition-all duration-500 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        />
      </div>
    </div>
  );
};

export default CarViewer;
