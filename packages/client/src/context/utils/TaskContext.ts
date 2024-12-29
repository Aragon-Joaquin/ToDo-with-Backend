import { taskProps } from '@/lib/types'
import { createContext } from 'react'
import { filterProps, HTTPMethod } from '../types'

interface tasksCtxProps {
	getTasks: {
		setOptionsInfo: (optionsInfo: filterProps) => void
		response: taskProps[]
		isPending: boolean
	}
	nonGetHttpMethod: {
		setHTTPCall: (HTTPCall: HTTPMethod) => void
	}
}

export const TasksContext = createContext<tasksCtxProps>({} as tasksCtxProps)
