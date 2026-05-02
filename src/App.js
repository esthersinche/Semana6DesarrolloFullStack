import CarreraCard from "./components/CarreraCard";
import { useEffect, useState } from "react";

function App() {
  const [carreras, setCarrera] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarreras = async () => {
      try {
        const res = await fetch("./carreras.json");
        const data = await res.json();
        setCarrera(data);
      } catch (error) {
        console.log("Error cargando carreras", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarreras();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      
      
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Carreras del Perú
      </h2>

     
      {loading ? (
        <p className="text-center text-gray-600 text-lg">
          Cargando...
        </p>
      ) : (
        

        <div className="flex flex-wrap justify-center gap-6">
          {carreras.map((carrera) => (
            <CarreraCard key={carrera.id} carrera={carrera} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;