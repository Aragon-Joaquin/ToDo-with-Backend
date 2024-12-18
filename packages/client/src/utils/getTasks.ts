import { URL_DATABASE } from './constants'

interface fetchProps {
	endpoint: 'tasks'
}

export async function getTasks({ endpoint }: fetchProps) {
	const data = await fetch(`${URL_DATABASE}/${endpoint}`)
	return data.json()
}
