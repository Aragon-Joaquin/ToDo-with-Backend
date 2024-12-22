export interface fetchProps {
	endpoint: 'tasks'
}

export interface taskProps {
	id: number
	name: string
	description?: string
	status: boolean

	createdAt: string // or date
	finishedAt?: string // or date
}
