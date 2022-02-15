import LevelBuilder from '../components/levelBuilder/LevelBuilder'
import LevelBuilderClearFab from '../components/levelBuilder/LevelBuilderClearFab'
import LevelBuilderSnackbar from '../components/levelBuilder/LevelBuilderSnackbar'

function Home() {
  return (
    <>
      <LevelBuilder />
      <LevelBuilderSnackbar />
      <LevelBuilderClearFab />
    </>
  )
}

export default Home
