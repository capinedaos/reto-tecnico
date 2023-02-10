import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonReturn, ListingByType } from "../components";

import axios from "axios";
const UnmannedShip = () => {
  const dispatch = useDispatch();
  const [unmannedShip, setUnmannedShip] = useState([]);
  const [ships, setShips] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/ship-management/ship")
      .then((res) => {
        setShips(res.data.ships);
      });
    let searchResult = ships.filter((element) => {
      if (element.typeShip.toString().includes("Vehiculo no Tripulado")) {
        return element;
      }
    });
    setUnmannedShip(searchResult);
  }, [dispatch, ships]);

  return (
    <div className="container">
      <h1>Naves no tripuladas</h1>
      <ButtonReturn route={"/"} />
      <ListingByType list={unmannedShip} />
    </div>
  );
};

export default UnmannedShip;
