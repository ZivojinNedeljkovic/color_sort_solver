import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import LevelBuilder from './components/levelBuilder/LevelBuilder'

import useSolutionSearch from './hooks/useSolutionSearch'
import Solution from './pages/Solution'

function App() {
  useSolutionSearch()
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LevelBuilder />} />
        <Route path="solution/:levelAsString" element={<Solution />} />
      </Route>
    </Routes>
  )
}

export default App
