import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  showModal: false,
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
  },
});

export const { setLoading, setModal } = uiSlice.actions;

export default uiSlice.reducer;
