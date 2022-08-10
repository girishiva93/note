import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: {
    notes: [],
    note: {},
    auth:{},
  },
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setAuth:(state,action) => {
      state.value.auth = {...action.payload}
    },
    setNotes: (state, action) => {
      state.value.notes = action.payload;
    },
    // getNote: (state, action) => {
    //   const singleNote = state.value.notes.filter(
    //     (note) => (note.id === action.payload)
    //   );
    //   state.value.note = {...singleNote[0]}
    // },

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

export const { setNotes, updateNotes, deleteNotes, setAuth } = notesSlice.actions;

export default notesSlice.reducer
