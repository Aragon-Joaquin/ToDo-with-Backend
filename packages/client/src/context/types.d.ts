import { taskProps } from '@/lib/types'

export const METHODS_VERBS = {
	GET: 'GET',
	POST: 'POST',
	DELETE: 'DELETE',
	PATCH: 'PATCH'
}

export type HTTPMethod =
	| { method: METHODS_VERBS.POST; body: { name: string; description: string | '' } }
	| { method: METHODS_VERBS.PATCH; body: Omit<taskProps, 'createdAt'> }
	| { method: METHODS_VERBS.DELETE; body: { id: number } }

export type GETMethod = { method: METHODS_VERBS.GET }

export type filterProps = {
	filterBy?: {
		Category: keyof taskProps
		Value: string
	}
}
