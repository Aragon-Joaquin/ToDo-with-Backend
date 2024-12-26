import { ReactElement, ReactNode } from 'react'
import { TasksContext } from './utils/TaskContext'
import { useTasks } from '@/context/hooks/useTasks'

export function TaskConsumer({ children }: { children: ReactElement | ReactNode }) {
	const { setOptionsInfo, response, isPending } = useTasks()

	return (
		<TasksContext.Provider
			value={{
				getTasks: {
					setOptionsInfo,
					response,
					isPending
				}
			}}
		>
			{children}
		</TasksContext.Provider>
	)
}
