import { useCallback, useEffect, useState } from 'react'

type UseWorkerProps = {
  scriptURL: string | URL
  options?: WorkerOptions
  onmessage: (message: string) => void
}

function useWorker({ scriptURL, options, onmessage }: UseWorkerProps) {
  const [worker] = useState(new Worker(scriptURL, options))

  worker.onmessage = (ev: MessageEvent<any>) => onmessage(ev.data)

  useEffect(() => {
    return () => worker.terminate()
  }, [worker])

  const postMessage = useCallback(
    (message: string) => {
      console.log(message)
      worker.postMessage(message)
    },
    [worker]
  )

  const terminate = useCallback(() => worker.terminate(), [worker])

  return { postMessage, terminate }
}

export default useWorker
