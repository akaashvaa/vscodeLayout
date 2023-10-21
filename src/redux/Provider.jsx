'use client'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider } from 'react-redux'

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
