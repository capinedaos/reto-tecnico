import React from "react";
import { Link } from "react-router-dom";

const ButtonReturn = ({ route }) => {
  return (
    <div className="mx-2 mb-3">
      <Link to={route} className="nav-link active">
        <button type="button" className="btn btn-success">
          <i className="bi bi-arrow-counterclockwise"></i>
        </button>
      </Link>
    </div>
  );
};

export default ButtonReturn;
