import { ReactElement, ReactNode, useEffect, useState } from 'react'
import { TasksContext } from './utils/TaskContext'
import { useTasks } from '@/context/hooks/useTasks'
import { HTTPMethod } from './types'
import { makeTaskPetition } from './utils/makeFetch'
import { ErrorBoundary } from '@/hooks/ErrorBoundary'

export function TaskConsumer({ children }: { children: ReactElement | ReactNode }) {
	const { setOptionsInfo, response, isPending } = useTasks()

	const [HTTPCall, setHTTPCall] = useState<HTTPMethod>()

	useEffect(() => {
		async function makeRequest() {
			if (HTTPCall?.method == null) return
			await makeTaskPetition({ method: HTTPCall.method, body: HTTPCall?.body })
			setOptionsInfo({})
		}

		makeRequest()
	}, [HTTPCall, setOptionsInfo])

	return (
		<ErrorBoundary fallBackComponent={<h1>Something went wrong</h1>}>
			<TasksContext.Provider
				value={{
					getTasks: {
						setOptionsInfo,
						response,
						isPending
					},
					nonGetHttpMethod: {
						setHTTPCall
					}
				}}
			>
				{children}
			</TasksContext.Provider>
		</ErrorBoundary>
	)
}
