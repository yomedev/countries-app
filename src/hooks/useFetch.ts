import { useEffect, useState } from "react"

export type TApiResponse = {
  
}

export const useFetch = (callback: () => any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('')

  const fetchData = async () => {
    try {
      setIsLoading(true)
      await callback()
    } catch (e: any) {
      setError(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  return [fetchData, isLoading, error] as const;

}