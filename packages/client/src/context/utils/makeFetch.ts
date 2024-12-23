import { URL_DATABASE } from '@/utils/constants'

type HTTPMethod = { method: 'GET' } | { method: 'POST'; body: { name: string; description?: string } }

export async function makeTaskPetition(HTTPMethod: HTTPMethod) {
	if (HTTPMethod.method === 'GET') {
		const data = await fetch(`${URL_DATABASE}/tasks`, {
			method: HTTPMethod.method,
			headers: {
				'Content-Type': 'application/json'
			}
		})
		return data.json()
	}

	await fetch(`${URL_DATABASE}/tasks`, {
		method: HTTPMethod.method,
		body: JSON.stringify({
			name: HTTPMethod.body.name.trim(),
			description: HTTPMethod.body.description
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	})

	return
}
