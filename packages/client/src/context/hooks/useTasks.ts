import { useEffect, useState, useTransition } from 'react'
import { taskProps } from '@/lib/types'
import { filterProps, METHODS_VERBS } from '../types.d'
import { makeTaskPetition } from '../utils/makeFetch'

export function useTasks() {
	const [isPending, startTransition] = useTransition()
	const [response, setResponse] = useState<taskProps[]>([])

	const [optionsInfo, setOptionsInfo] = useState<filterProps>() // this is for GET petitions

	useEffect(() => {
		//@ts-expect-error: error in ts, documentation says it's an action
		startTransition(async () => {
			const data: taskProps[] = await makeTaskPetition({ method: METHODS_VERBS.GET })
			if (optionsInfo?.filterBy?.Value && optionsInfo?.filterBy.Value.length > 0) {
				const { filterBy } = optionsInfo
				return setResponse(
					data.filter((task) => {
						const filterByCat = task[filterBy.Category]?.toString().toLowerCase()
						return filterByCat?.includes(filterBy.Value.toLowerCase())
					})
				)
			}
			return setResponse(data)
		})
	}, [optionsInfo])

	return {
		response,
		isPending,
		setOptionsInfo
	}
}
