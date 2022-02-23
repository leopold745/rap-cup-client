import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import UserProvider from "./contexts/User"
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
	<UserProvider>
		<App />
	</UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);