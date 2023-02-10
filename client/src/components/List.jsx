import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ModalDelete from "./ModalDelete";
import { createShipThunk } from "../app/ship.slice";
import "../assets/styles/List.css";

const List = ({ setTitleModal, selectShip, setTextButton }) => {
  const dispatch = useDispatch();
  const [idShip, setIdShip] = useState(0);
  const shipsSelector = useSelector((state) => state.ship);
  const [ships, setShip] = useState([]);
  const [shipsFilter, setShipFilter] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/ship-management/ship")
      .then((res) => {
        setShip(res.data.ships);
        setShipFilter(res.data.ships);
      });
    setShip(shipsSelector);
  }, [dispatch, shipsSelector]);

  const handleChange = (e) => {
    setSearch(e.target.value);
    filter(e.target.value);
  };

  const filter = (search) => {
    let searchResult = shipsFilter.filter((element) => {
      if (
        element.name.toString().toLowerCase().includes(search.toLowerCase()) ||
        element.country.toString().toLowerCase().includes(search.toLowerCase())
      ) {
        return element;
      }
    });
    setShip(searchResult);
  };

  return (
    <>
      <div className="container-list">
        <div className="input-group mb-3">
          <input
            type="text"
            value={search}
            onChange={handleChange}
            className="form-control"
            placeholder="Busqueda por Nombre o Pais"
            aria-label="Busqueda por Nombre o Pais"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-info"
            type="button"
            id="button-addon2"
          >
            <i className="bi bi-search"></i>
          </button>
        </div>

        {Array.isArray(ships)
          ? ships.map((ship) => (
              <div key={ship.id}>
                <div className="card m-2" style={{ width: "16rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Nombre: {ship.name} </h5>
                    <p className="card-text">Fecha inicio: {ship.startDate} </p>
                    <p className="card-text">Fecha fin: {ship.finalDate} </p>
                    <p className="card-text">
                      Tipo de combustible: {ship.fuelType}{" "}
                    </p>
                    <p className="card-text">
                      Pais:
                      {ship.country}{" "}
                    </p>
                    {/* <p className="card-text">Peso: {ship.weight} </p>
                    <p className="card-text">Potencia: {ship.power} </p>
                    <p className="card-text">Autonomia:{ship.autonomy} </p>
                    <p className="card-text">Altura: {ship.height}</p> */}

                    <button
                      onClick={() => {
                        selectShip(ship);
                        setTitleModal("Editar vehiculo");
                        setTextButton("Editar vehiculo");
                      }}
                      className="btn btn-warning btn-lg"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#modalForm"
                    >
                      <i className="bi bi-pencil"></i>
                    </button>

                    <button
                      onClick={() => {
                        setIdShip(ship.id);
                      }}
                      type="button"
                      className="btn btn-danger btn-lg"
                      data-bs-toggle="modal"
                      data-bs-target="#modalDelete"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          : []}
      </div>
      <ModalDelete
        className={"modal fade"}
        idModal={"modalDelete"}
        tabIndex={"-1"}
        aria-labelledby={"exampleModalLabel"}
        aria-hidden={"true"}
        idShip={idShip}
      />
    </>
  );
};

export default List;
