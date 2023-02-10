import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonReturn, ListingByType } from "../components";
import axios from "axios";

const MannedShip = () => {
  const dispatch = useDispatch();
  const [mannedShip, setMannedShip] = useState([]);
  const [ships, setShips] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/ship-management/ship")
      .then((res) => {
        setShips(res.data.ships);
      });

    let searchResult = ships.filter((element) => {
      if (element.typeShip.toString().includes("Vehiculo Tripulado")) {
        return element;
      }
    });
    setMannedShip(searchResult);
  }, [dispatch, ships]);

  return (
    <div className="container">
      <h1>Naves tripuladas</h1>
      <ButtonReturn route={"/"} />
      <ListingByType list={mannedShip} />
    </div>
  );
};

export default MannedShip;
