import { useEffect, useState, useTransition } from 'react'
import { taskProps } from '@/lib/types'
import { filterProps } from '../types'
import { makeTaskPetition } from '../utils/makeFetch'

export function useTasks() {
	const [isPending, startTransition] = useTransition()
	const [response, setResponse] = useState<taskProps[]>([])

	const [optionsInfo, setOptionsInfo] = useState<filterProps>()

	useEffect(() => {
		//@ts-expect-error: error in ts, documentation says it's an action
		startTransition(async () => {
			if (optionsInfo?.HTTPMethod == null) return
			const data: taskProps[] = await makeTaskPetition(optionsInfo.HTTPMethod)
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
