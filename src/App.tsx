import { useState } from 'react'
import Header from './components/layout/Header'
import LevelBuilder from './components/levelBuilder/LevelBuilder'
import Solution from './components/Solution'
import { Bottle } from './models/bottle'

function App() {
  const [level, setLevel] = useState<Bottle[] | undefined>(undefined)

  // console.log(JSON.parse(JSON.stringify(level)))

  const onSubmitLevelHandler = (level: Bottle[]) => {
    console.log(level)
    setLevel(level)
  }

  return (
    <>
      <Header />
      {!level && <LevelBuilder onSubmit={onSubmitLevelHandler} />}
      {level && <Solution level={level} />}
    </>
  )
}

export default App
