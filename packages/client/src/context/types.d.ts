import { taskProps } from '@/lib/types'

export type filterProps = {
	filterBy?: {
		Category: keyof taskProps
		Value: string
	}
}
