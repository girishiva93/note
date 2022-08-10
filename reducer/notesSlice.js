import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    notes: [],
    note: {},
  },
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes: (state, action) => {
      state.value.notes = [...state.value.notes, action.payload];
    },
    getNote: (state, action) => {
      const singleNote = state.value.notes.filter(
        (note) => (note.id === action.payload)
      );
      state.value.note = {...singleNote[0]}
    },

    updateNotes: (state, action) => {
      const updateNotes = state.value.notes.filter(
        (note) => note.id !== action.payload.id
      );
      const updateNote = [...updateNotes, action.payload];
      state.value.notes = [...updateNote];
    },
    deleteNotes: (state, action) => {
      const deleteNote = state.value.notes.filter(
        (note) => note.id !== action.payload
      );
      state.value.notes = [...deleteNote];
    },
  },
});

export const { setNotes, getNote, updateNotes, deleteNotes } = notesSlice.actions;

export default notesSlice.reducer
