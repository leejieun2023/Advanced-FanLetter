import fakeData from "fakeData.json";
import { createSlice } from "@reduxjs/toolkit";

const initialState = fakeData;

const LetterSlice = createSlice({
  name: "letters",
  initialState,
  reducers: {
    addLetter: (state, action) => {
      state.unshift(action.payload);
    },
    deleteLetter: (state, action) => {
      return state.filter(letter => letter.id !== action.payload);
    },
    editLetter: (state, action) => {
      return state.map((letter) => {
        if (letter.id === action.payload.id) {
          return { ...letter, content: action.payload.editingText };
        }
        return letter;
      });
    },
  },
});

export const { addLetter, deleteLetter, editLetter } = LetterSlice.actions;
export default LetterSlice.reducer;