import { TasksContext } from '@/context/utils/TaskContext'
import { useContext } from 'react'

export function useTaskContext() {
	const { getTasks } = useContext(TasksContext)
	return { getTasks }
}
