import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";

const URL = "http://localhost:4000/api/v1/ship-management/ship";

export const shipSlice = createSlice({
  name: "ship",
  initialState: [],
  reducers: {
    setShip: (state, action) => {
      return action.payload;
    },
  },
});

export const createShipThunk = (data) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(URL, data)
    .then((res) => {
      dispatch(setShip(res.data.newShip));
      dispatch(getShipThunk());
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const getShipThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(URL)
    .then((res) => {
      dispatch(setShip(res.data.ships));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const getShipByIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(`http://localhost:4000/api/v1/ship-management/ship/${id}`)
    .then((res) => {
      dispatch(setShip(res.data.ship));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const updateShipThunk = (data, id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .patch(`http://localhost:4000/api/v1/ship-management/ship/${id}`, data)
    .then((res) => {
      dispatch(setShip(res.data.ship));
      dispatch(getShipThunk());
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const deleteShipByIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .delete(`http://localhost:4000/api/v1/ship-management/ship/${id}`)
    .then((res) => {
      dispatch(setShip(res.data.ship));
      dispatch(getShipThunk());
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setShip } = shipSlice.actions;
export default shipSlice.reducer;
