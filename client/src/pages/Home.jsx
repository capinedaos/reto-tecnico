import React, { useState } from "react";
import { List, Form } from "../components";
import { Link } from "react-router-dom";
import "../assets/styles/Home.css";

const Home = () => {
  const [shipSelected, setShipSelected] = useState(null);
  const [titleModal, setTitleModal] = useState("");
  const [textButton, setTextButton] = useState("");

  const selectShip = (ship) => {
    setShipSelected(ship);
  };

  const deselectShip = () => {
    setShipSelected(null);
  };
  return (
    <div>
      <div className="container">
        <div>
          <button
            type="button"
            className="btn btn-info m-2"
            data-bs-toggle="modal"
            data-bs-target="#modalForm"
            onClick={() => {
              setTitleModal("Registar nuevo vehiculo");
              setTextButton("Agregar nuevo vehiculo");
              deselectShip();
            }}
          >
            <i className="bi bi-plus-circle"></i>
          </button>
        </div>
        <a
          href={
            "https://moaramore.com/2016/05/14/clasificacion-de-las-naves-espaciales/"
          }
          target="_blank"
        >
          <p className="m-1 fs-6">Clasificación de las naves espaciales</p>
        </a>

        <Form
          className={"modal fade"}
          idModal={"modalForm"}
          tabIndex={"-1"}
          aria-labelledby={"exampleModalLabel"}
          aria-hidden={"true"}
          shipSelected={shipSelected}
          deselectShip={deselectShip}
          titleModal={titleModal}
          textButton={textButton}
        />

        <div
          className="m-0 row justify-content-center"
          role="group"
          aria-label="Basic outlined example"
        >
          <div className="col-auto">
            <Link to={"/manned-ship"}>
              <button type="button" className="btn btn-outline-primary btn-lg">
                Naves tripuladas
              </button>
            </Link>
            <Link to={"/unmanned-ship"}>
              <button type="button" className="btn btn-outline-primary btn-lg">
                Naves no tripuladas
              </button>
            </Link>
            <Link to={"/shuttle-ship"}>
              <button type="button" className="btn btn-outline-primary btn-lg">
                Naves lanzadera
              </button>
            </Link>
          </div>
        </div>

        <List
          setTitleModal={setTitleModal}
          selectShip={selectShip}
          setTextButton={setTextButton}
        />
      </div>
    </div>
  );
};

export default Home;
