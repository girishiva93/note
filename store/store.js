import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/query";


import noteReducer from "../reducer/notesSlice";

export const store = configureStore({
  reducer: {
    notes:noteReducer,
  },
})

setupListeners(store.dispatch);

export default store;