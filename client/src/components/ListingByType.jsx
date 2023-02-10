import React from "react";

const ListingByType = ({ list }) => {
  return (
    <div className="container">
      <div className="table-responsive rounded-3" style={{ height: "410px" }}>
        <table className="table table-sm table-striped border-primary text-gray-900">
          <thead className="bg-light table-info text-black">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Tipo</th>
              <th scope="col">Fecha inicio</th>
              <th scope="col">Fecha fin</th>
              <th scope="col">Tipo de combustible</th>
              <th scope="col">Pais</th>
              <th scope="col">Peso</th>
              <th scope="col">Potencia</th>
              <th scope="col">Autonomia</th>
              <th scope="col">Altura</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(list)
              ? list.map((ship) => (
                  <tr className="text-left" key={ship.id}>
                    <td>{ship.name}</td>
                    <td>{ship.typeShip}</td>
                    <td>{ship.startDate}</td>
                    <td>{ship.finalDate}</td>
                    <td>{ship.fuelType}</td>
                    <td>{ship.country}</td>
                    <td>{ship.weight}</td>
                    <td>{ship.power}</td>
                    <td>{ship.autonomy}</td>
                    <td>{ship.height}</td>
                  </tr>
                ))
              : []}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListingByType;
