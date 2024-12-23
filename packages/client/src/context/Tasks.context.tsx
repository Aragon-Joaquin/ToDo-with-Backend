import { useGetTasks } from './hooks/getTasks'
import { ReactElement, ReactNode } from 'react'
import { TasksContext } from './utils/TaskContext'

export function TaskConsumer({ children }: { children: ReactElement | ReactNode }) {
	const { setGETPetition, response, isPending } = useGetTasks()

	return (
		<TasksContext.Provider
			value={{
				getTask: {
					setGETPetition,
					response,
					isPending
				}
			}}
		>
			{children}
		</TasksContext.Provider>
	)
}
