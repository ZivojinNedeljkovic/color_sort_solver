import useAppSelector from '../../hooks/useAppSelector'
import Bottles from '../bottles/Bottles'

function SolutionDisplayBottles() {
  const {
    solution: { step: solutionStep },
    level: { level },
  } = useAppSelector(store => store)

  return (
    <Bottles
      bottles={solutionStep}
      maxBottlesPerRow={level?.maxBottlesPerRow ?? 5}
    />
  )
}

export default SolutionDisplayBottles
