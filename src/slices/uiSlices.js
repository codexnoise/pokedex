import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  showModal: false,
  idModal: -1,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setModal: (state, action) => {
      state.showModal = action.payload;
    },
    setIdModal: (state, action) => {
      state.idModal = action.payload;
    },
  },
});

export const { setLoading, setModal, setIdModal } = uiSlice.actions;

export default uiSlice.reducer;
