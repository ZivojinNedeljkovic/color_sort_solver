import { useEffect, useState } from 'react'

type OnMessageHandler = ((this: Worker, ev: MessageEvent<any>) => void) | null
type PostMessage = ((message: any) => void) | null
type Terminate = (() => void) | null


function useWorker(scriptURL: string) {
  
}

export default useWorker
