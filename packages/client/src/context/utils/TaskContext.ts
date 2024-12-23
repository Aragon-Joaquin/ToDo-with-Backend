import { taskProps } from '@/lib/types'
import { createContext, Dispatch } from 'react'
import { filterProps } from '../types'

interface tasksCtxProps {
	getTask: {
		setGETPetition: Dispatch<React.SetStateAction<filterProps | undefined>>
		response: taskProps[]
		isPending: boolean
	}
}

export const TasksContext = createContext({} as tasksCtxProps)
