import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'

import useSolutionSearch from './hooks/useSolutionSearch'
import Home from './pages/Home'
import Solution from './pages/Solution'

function App() {
  useSolutionSearch()
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="solution/:levelId" element={<Solution />} />
        <Route path="*" element={<h1>Invalid route</h1>} />
      </Route>
    </Routes>
  )
}

export default App
