import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  files: null,
}

const openEditorSlice = createSlice({
  name: 'openEditor',
  initialState,
  reducers: {
    setFiles: (state, action) => {
      state.files = action.payload
    },
    deleteFiles: (state) => {
      state.files = action.payload
    },
  },
})

export const { setFiles, deleteFiles } = openEditorSlice.actions

export const openEditorReducer = openEditorSlice.reducer
