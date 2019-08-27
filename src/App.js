import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import BusinessCardPage from './pages/BusinessCardPage'

function App() {
  return (
    <Provider store={store}>
      <BusinessCardPage/>
    </Provider>
  )
}

export default App