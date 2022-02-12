import useAppSelector from '../../../hooks/useAppSelector'

import FindSolutionBtn from './FindSolutionBtn'
import ViewSolutionBtn from './ViewSolutionBtn'

function LBButtonMenu() {
  const {
    solution: { hasASolutionBeenFound },
  } = useAppSelector(store => store)

  return hasASolutionBeenFound ? <ViewSolutionBtn /> : <FindSolutionBtn />
}

export default LBButtonMenu
