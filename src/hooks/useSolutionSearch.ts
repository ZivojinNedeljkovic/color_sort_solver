import { Bottle } from '../models/bottle'
import { Step } from '../models/step'
import useWorker from './useWorker'

type UseSolutionSearchProps = {
  level: Bottle[]
  onFindSolution: (response: any) => void
}

function useSolutionSearch({ level, onFindSolution }: UseSolutionSearchProps) {
  const onMessageHandler = (stringifiedSolution: string) => {
    onFindSolution(JSON.parse(stringifiedSolution))
    // console.log(stringifiedSolution)
  }

  const { postMessage, terminate } = useWorker({
    scriptURL: 'worker.js',
    onmessage: onMessageHandler,
  })

  postMessage(JSON.stringify(level))

  return { terminateSearch: terminate }
}

export default useSolutionSearch
