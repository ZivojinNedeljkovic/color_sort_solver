import { compact } from 'lodash'
import { Bottle } from './bottle'
import { Step } from './step'

class SolutionSearch {
  private worker: Worker | undefined
  private terminateWorkerTimeoutID: NodeJS.Timeout | undefined = undefined

  private bottlesToMessage(bottles: Bottle[]) {
    return JSON.stringify(bottles.map(bottle => compact(bottle)))
  }

  private clearTerminateWorkerTimeout() {
    if (this.terminateWorkerTimeoutID)
      clearTimeout(this.terminateWorkerTimeoutID)
  }

  private resetTerminateWorkerTimeout() {
    this.clearTerminateWorkerTimeout()

    this.terminateWorkerTimeoutID = setTimeout(
      () => this.worker?.terminate(),
      10000
    )
  }

  startSearch(bottles: Bottle[], onFindSolution: (solution: Step[]) => void) {
    this.worker = new Worker('worker.js')

    this.worker?.postMessage(this.bottlesToMessage(bottles))

    this.worker!.onmessage = message => {
      this.resetTerminateWorkerTimeout()
      onFindSolution(message.data)
    }
  }

  terminateSearch() {
    this.clearTerminateWorkerTimeout()
    this.worker?.terminate()
  }
}

export default SolutionSearch
