import { Weight, Wind } from "lucide-react";
import type { CarData } from "@/pages/Index";
import { useEffect, useState } from "react";

interface Props {
  carro: CarData;
  allCarros: CarData[];
}

const SpecsDashboard = ({ carro, allCarros }: Props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, [carro.id]);

  const maxArrasto = Math.max(...allCarros.map((c) => parseFloat(c.arrasto)));
  const maxPeso = Math.max(...allCarros.map((c) => parseFloat(c.peso)));

  return (
    <div
      className={`transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <h3 className="font-heading text-xl font-bold text-foreground mb-4 tracking-wider text-center">
        Especificações Técnicas
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-card rounded-xl border border-border p-6 flex items-center gap-4 shadow-md">
          <div className="bg-secondary/20 p-3 rounded-lg">
            <Weight className="w-8 h-8 text-secondary" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground font-body uppercase tracking-wider">Peso</p>
            <p className="text-3xl font-heading font-bold text-foreground">{carro.peso}</p>
            <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-secondary rounded-full transition-all duration-700"
                style={{ width: `${(parseFloat(carro.peso) / maxPeso) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl border border-border p-6 flex items-center gap-4 shadow-md">
          <div className="bg-secondary/20 p-3 rounded-lg">
            <Wind className="w-8 h-8 text-secondary" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground font-body uppercase tracking-wider">Arrasto</p>
            <p className="text-3xl font-heading font-bold text-foreground">{carro.arrasto}</p>
            <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-secondary rounded-full transition-all duration-700"
                style={{ width: `${(parseFloat(carro.arrasto) / maxArrasto) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Comparativo */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-md">
        <h4 className="font-heading text-lg font-bold text-foreground mb-4 tracking-wider">
          Comparativo de Arrasto
        </h4>
        <div className="space-y-3">
          {allCarros.map((c) => (
            <div key={c.id} className="flex items-center gap-3">
              <span
                className={`font-heading text-sm w-20 ${
                  c.id === carro.id ? "text-secondary font-bold" : "text-muted-foreground"
                }`}
              >
                {c.nome}
              </span>
              <div className="flex-1 h-6 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    c.id === carro.id ? "bg-secondary" : "bg-primary/30"
                  }`}
                  style={{ width: `${(parseFloat(c.arrasto) / maxArrasto) * 100}%` }}
                />
              </div>
              <span
                className={`font-body text-sm w-16 text-right ${
                  c.id === carro.id ? "text-secondary font-bold" : "text-muted-foreground"
                }`}
              >
                {c.arrasto}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecsDashboard;
