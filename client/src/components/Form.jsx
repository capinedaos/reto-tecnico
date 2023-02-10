import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useFormValidation } from "../hooks";
import ModalInformation from "./ModalInformation";
import moment from "moment";
import { createShipThunk, updateShipThunk } from "../app/ship.slice";

const Form = ({
  className,
  idModal,
  tabIndex,
  ariaLabelledby,
  ariaHidden,
  shipSelected,
  deselectShip,
  titleModal,
  textButton,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [typeShip, setTypeShip] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [country, setCountry] = useState("");
  const [information, setInformation] = useState("");

  useFormValidation();

  useEffect(() => {
    if (shipSelected !== null) {
      setName(shipSelected.name);
      setTypeShip(shipSelected.typeShip);
      setFuelType(shipSelected.fuelType);
      setStartDate(moment(shipSelected.startDate).format("YYYY-MM-DD"));
      setCountry(shipSelected.country);
    } else {
      setName("");
      setTypeShip("");
      setFuelType("");
      setStartDate("");
      setCountry("");
    }
  }, [shipSelected]);

  const onSubmit = (e) => {
    e.preventDefault();

    const ship = {
      name,
      typeShip,
      fuelType,
      startDate,
      country,
    };

    // editar
    if (shipSelected !== null) {
      dispatch(updateShipThunk(ship, shipSelected.id));
      deselectShip();
      setInformation("Informacion modificada");
      deselectShip();
    } else {
      // crear
      deselectShip();
      dispatch(createShipThunk(ship));
      setInformation("Registro creado");
      e.target.reset();
      deselectShip();
    }
  };

  return (
    <form onSubmit={onSubmit} className="needs-validation" noValidate>
      <div
        className={className}
        id={idModal}
        tabIndex={tabIndex}
        aria-labelledby={ariaLabelledby}
        aria-hidden={ariaHidden}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {titleModal}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name || ""}
                  placeholder="Ingresa un nombre"
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              <div className="mb-3">
                <label htmlFor="typeShip" className="form-label">
                  Tipo de nave
                </label>
                <select
                  type="text"
                  id="typeShip"
                  onChange={(e) => setTypeShip(e.target.value)}
                  value={typeShip}
                  className="form-control"
                  required
                >
                  <option value="" disabled>
                    Seleccione una opcion
                  </option>
                  <option value="Vehiculo de Lanzadera">
                    Vehiculo de Lanzadera
                  </option>
                  <option value="Vehiculo Tripulado">Vehiculo Tripulado</option>
                  <option value="Vehiculo no Tripulado">
                    Vehiculo no Tripulado
                  </option>
                </select>
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              <div className="mb-3">
                <label htmlFor="fuelType" className="form-label">
                  Combustible
                </label>
                <input
                  type="text"
                  id="fuelType"
                  onChange={(e) => setFuelType(e.target.value)}
                  value={fuelType || ""}
                  placeholder="Ingresa el tipo de combustible"
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              <div className="mb-3">
                <label htmlFor="startDate" className="form-label">
                  Fecha inicio
                </label>
                <input
                  type="date"
                  id="startDate"
                  onChange={(e) => setStartDate(e.target.value)}
                  value={startDate || ""}
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                  Pais
                </label>
                <input
                  type="text"
                  id="country"
                  onChange={(e) => setCountry(e.target.value)}
                  value={country || ""}
                  placeholder="Ingresa un pais"
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>

              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                data-bs-target="#modalInformation"
                data-bs-toggle="modal"
              >
                {textButton}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalInformation
        idModal={"modalInformation"}
        className={"modal fade"}
        tabIndex={"-1"}
        aria-labelledby={"exampleModalLabel"}
        aria-hidden={"true"}
        information={information}
      />
    </form>
  );
};

export default Form;
