import { taskProps } from '@/lib/types'
import { createContext } from 'react'
import { filterProps } from '../types'

interface tasksCtxProps {
	getTasks: {
		setOptionsInfo: (optionsInfo: filterProps) => void
		response: taskProps[]
		isPending: boolean
	}
}

export const TasksContext = createContext<tasksCtxProps>({} as tasksCtxProps)
