import { useState } from "react";
import Header from "@/components/Header";
import CarViewer from "@/components/CarViewer";
import SpecsDashboard from "@/components/SpecsDashboard";
import CarSelector from "@/components/CarSelector";

import carro1 from "@/assets/carro1.jpeg";
import carro2 from "@/assets/carro2.jpeg";
import carro3 from "@/assets/carro3.jpeg";
import carro4 from "@/assets/carro4.jpeg";
import carro5 from "@/assets/carro5.jpeg";

export interface CarData {
  id: number;
  nome: string;
  imagem: string;
  peso: string;
  arrasto: string;
}

const carros: CarData[] = [
  { id: 1, nome: "Carro 1", imagem: carro1, peso: "49g", arrasto: "0.235N" },
  { id: 2, nome: "Carro 2", imagem: carro2, peso: "43g", arrasto: "0.567N" },
  { id: 3, nome: "Carro 3", imagem: carro3, peso: "47g", arrasto: "0.371N" },
  { id: 4, nome: "Carro 4", imagem: carro4, peso: "56g", arrasto: "0.159N" },
  { id: 5, nome: "Carro 5", imagem: carro5, peso: "49.7g", arrasto: "0.432N" },
];

const Index = () => {
  const [selectedCar, setSelectedCar] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <CarSelector
          carros={carros}
          selected={selectedCar}
          onSelect={setSelectedCar}
        />
        <CarViewer carro={carros[selectedCar]} />
        <SpecsDashboard carro={carros[selectedCar]} allCarros={carros} />
      </main>
    </div>
  );
};

export default Index;
