import { useEffect, useState, useTransition } from 'react'
import { URL_DATABASE } from '../utils/constants'
import { fetchProps, taskProps } from '@/lib/types'

type filterProps = {
	Category: keyof taskProps
	Value: string
}

export function useGetTasks(props: fetchProps | null) {
	const [isPending, startTransition] = useTransition()
	const [response, setResponse] = useState<taskProps[]>([])
	const [filter, setFilter] = useState<filterProps | null>(null)

	console.log('too much renders', filter)
	useEffect(() => {
		if (props?.endpoint == null) return
		//@ts-expect-error: error in ts, documentation says it's an action
		startTransition(async () => {
			try {
				const data: taskProps[] = await (await fetch(`${URL_DATABASE}/${props.endpoint}`)).json()
				if (filter?.Value && filter.Value.length > 0)
					return setResponse(
						data.filter((task) => {
							return task[filter.Category]?.toString().toLowerCase().includes(filter.Value.toLowerCase())
						})
					)
				return setResponse(data)
			} catch (e) {
				console.log(e) //! make error handling
			}
		})
	}, [props?.endpoint, filter])

	return {
		response,
		isPending,
		setFilter
	}
}
