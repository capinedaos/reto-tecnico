import React from "react";
import { useDispatch } from "react-redux";
import { deleteShipByIdThunk, getShipThunk } from "../app/ship.slice";

const ModalDelete = ({
  idShip,
  className,
  idModal,
  tabIndex,
  ariaLabelledby,
  ariaHidden,
}) => {
  const dispatch = useDispatch();
  const deleteData = (idShip) => {
    if (idShip) {
      dispatch(deleteShipByIdThunk(idShip));
      dispatch(getShipThunk());
    }
  };

  return (
    <div
      id={idModal}
      className={className}
      tabIndex={tabIndex}
      aria-labelledby={ariaLabelledby}
      aria-hidden={ariaHidden}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Eliminando informacion
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h5>Esta seguro ?</h5>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              NO
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={() => {
                deleteData(idShip);
              }}
            >
              SI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
