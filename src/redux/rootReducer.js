import { combineReducers } from '@reduxjs/toolkit'
import { activityReducer } from './activity/activitySlice'
import { openEditorReducer } from './activity/openEditorSlice'

export const rootReducer = combineReducers({
  activity: activityReducer,
  openEditor: openEditorReducer,
})
