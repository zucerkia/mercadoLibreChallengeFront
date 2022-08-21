import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

// Components
import HomePage from './components/pages/Home'
import ItemsPage from './components/pages/Items'
import DetailPage from './components/pages/Detail'

// Styles
import './index.css'
import PageTemplate from './components/templates/PageTemplate'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Router>
      <PageTemplate>
        <Link to="items">items</Link>
        <Link to="items/23">items/id</Link>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/items" element={<ItemsPage />}>
              <Route path=":id" element={<DetailPage />} />
            </Route>
            <Route
              path="*"
              element={
                <main style={{ padding: '1rem' }}>
                  <p>404 page not found</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </PageTemplate>
    </Router>
    <HomePage />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
