import { useEffect, useState, useTransition } from 'react'
import { taskProps } from '@/lib/types'
import { filterProps } from '../types'
import { makeTaskPetition } from '../utils/makeFetch'

export function useGetTasks() {
	const [isPending, startTransition] = useTransition()
	const [response, setResponse] = useState<taskProps[]>([])

	const [GETPetition, setGETPetition] = useState<filterProps>()

	console.log('too much renders', GETPetition)
	useEffect(() => {
		//@ts-expect-error: error in ts, documentation says it's an action
		startTransition(async () => {
			const data: taskProps[] = await makeTaskPetition({ method: 'GET' })
			if (GETPetition?.filterBy?.Value && GETPetition?.filterBy.Value.length > 0) {
				const { filterBy } = GETPetition
				return setResponse(
					data.filter((task) => {
						const filterByCat = task[filterBy.Category]?.toString().toLowerCase()
						return filterByCat?.includes(filterBy.Value.toLowerCase())
					})
				)
			}
			return setResponse(data)
		})
	}, [GETPetition])

	return {
		response,
		isPending,
		setGETPetition
	}
}
