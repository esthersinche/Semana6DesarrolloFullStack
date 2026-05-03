import { useEffect, useState } from "react";
import PlayerCard from "./components/PlayerCard";

function App() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("/personajes.json")
      .then(res => res.json())
      .then(data => {
        setPlayers(data);
        setSelected(data[0]);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 p-6">

      <h1 className="text-4xl font-bold text-center mb-6">
        HAIKYUU!! WIKI
      </h1>

      {loading ? (
        <p className="text-center">Cargando...</p>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">


          {selected && (
            <div className="lg:col-span-2 bg-white p-6 shadow-xl border-4 border-black">
              <img
                src={selected.image}
                alt={selected.name}
                style={{ height: "1100px" }}
                className="w-full object-cover object-top"
              />

              <h2 className="text-3xl font-bold mt-4">
                {selected.name}
              </h2>

              <p className="mt-2 text-gray-600">
                #{selected.number} - {selected.position}
              </p>

              <p className="mt-4">
                {selected.description}
              </p>
            </div>
          )}

          {/* LISTA */}
          <div className="flex flex-col gap-4">
            {players.map(player => (
              <PlayerCard
                key={player.id}
                player={player}
                onClick={() => setSelected(player)}
              />
            ))}
          </div>

        </div>
      )}
    </div>
  );
}

export default App;