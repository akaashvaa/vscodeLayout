import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeBar: false,
}

const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    setActiveBar: (state, action) => {
      state.activeBar = action.payload
    },
  },
})

export const { setActiveBar } = activitySlice.actions

export const activityReducer = activitySlice.reducer
