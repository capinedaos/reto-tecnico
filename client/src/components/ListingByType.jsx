import React from "react";

const ListingByType = ({ list }) => {
  return (
    <div className="container">
      <div className="table-responsive rounded-3" style={{ height: "410px" }}>
        <table className="table table-sm table-striped border-primary text-gray-900">
          <thead className="bg-light table-info text-black">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Tipo de nave</th>
              <th scope="col">Tipo de combustible</th>
              <th scope="col">Fecha inicio</th>
              <th scope="col">Pais</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(list)
              ? list.map((ship) => (
                  <tr className="text-left" key={ship.id}>
                    <td>{ship.name}</td>
                    <td>{ship.typeShip}</td>
                    <td>{ship.fuelType}</td>
                    <td>{ship.startDate}</td>
                    <td>{ship.country}</td>
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
