function CarreraCard({ carrera }) {
    return (
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 w-72">
        
  
        <img
          src={carrera.imagen || "https://via.placeholder.com/300"}
          alt={carrera.nombre}
          className="w-full h-40 object-cover"
        />
  
      
        <div className="p-4 space-y-2">
          
          <h3 className="text-lg font-bold text-gray-800">
            {carrera.nombre}
          </h3>
  
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Dificultad:</span>{" "}
            <span className="text-red-500">{carrera.dificultad}</span>
          </p>
  
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Demanda:</span>{" "}
            <span className="text-blue-500">{carrera.demanda}</span>
          </p>
  
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Sueldo promedio:</span>{" "}
            <span className="text-green-600">S/ {carrera.sueldoPromedio}</span>
          </p>
        </div>
      </div>
    );
  }
  
  export default CarreraCard;