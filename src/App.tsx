import { useEffect, useState } from 'react'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import LevelBuilder from './components/levelBuilder/LevelBuilder'
import Solution from './components/Solution'
import useAppDispatch from './hooks/useAppDispatch'
import { Bottle } from './models/bottle'
const p = [
  ['#EE3231', '#67C1FF', '#FB98F3', '#F25298'],
  ['#FAD749', '#AE1AB0', '#9AD85D', '#4DD5AD'],
  ['#EE3231', '#9AD85D', '#9AD85D', '#FB6A79'],
  ['#FAD749', '#FAD749', '#67C1FF', '#4DD5AD'],
  ['#F25298', '#6B67D8', '#FEAFA2', '#F7A036'],
  ['#FAD749', '#FB98F3', '#6B67D8', '#FB98F3'],
  ['#67C1FF', '#AE1AB0', '#4DD5AD', '#F7A036'],
  ['#FEAFA2', '#F25298', '#67C1FF', '#EE3231'],
  ['#9AD85D', '#F7A036', '#6B67D8', '#FEAFA2'],
  ['#4DD5AD', '#6B67D8', '#F7A036', '#FB98F3'],
  ['#AE1AB0', '#FB6A79', '#FEAFA2', '#FB6A79'],
  ['#F25298', '#FB6A79', '#AE1AB0', '#EE3231'],
  [],
  [],
]
function App() {
  const [level, setLevel] = useState<Bottle[] | undefined>(undefined)

  // const [someState, setSomeState] = useState(4)

  // useEffect(() => console.log(someState), [someState])

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
      {/* <Footer /> */}
    </>
  )
}

export default App
