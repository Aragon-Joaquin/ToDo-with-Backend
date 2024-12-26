import { taskProps } from '@/lib/types'
import { HTTPMethod } from './utils/makeFetch'

export type filterProps = {
	filterBy?: {
		Category: keyof taskProps
		Value: string
	}
	HTTPMethod: HTTPMethod
}
