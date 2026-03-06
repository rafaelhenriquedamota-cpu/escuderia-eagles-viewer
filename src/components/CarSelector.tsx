import type { CarData } from "@/pages/Index";

interface Props {
  carros: CarData[];
  selected: number;
  onSelect: (index: number) => void;
}

const CarSelector = ({ carros, selected, onSelect }: Props) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {carros.map((carro, i) => (
        <button
          key={carro.id}
          onClick={() => onSelect(i)}
          className={`
            px-5 py-2.5 rounded-lg font-heading text-sm font-semibold tracking-wider
            transition-all duration-300 border-2
            ${
              selected === i
                ? "bg-secondary text-secondary-foreground border-secondary shadow-lg shadow-secondary/30 scale-105"
                : "bg-card text-card-foreground border-border hover:border-secondary/50 hover:shadow-md"
            }
          `}
        >
          {carro.nome}
        </button>
      ))}
    </div>
  );
};

export default CarSelector;
