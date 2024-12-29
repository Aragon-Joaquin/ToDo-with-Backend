import { URL_DATABASE } from '@/utils/constants'
import { GETMethod, HTTPMethod } from '../types'

const HEADERS_MAP = new Map(
	Object.entries({
		GET: () => ({
			method: 'GET'
		}),
		POST: (body: { name: string; description: string | '' }) => ({
			method: 'POST',
			body: JSON.stringify({
				name: body.name.trim(),
				description: body.description
			})
		}),
		DELETE: (body: { id: number }) => ({
			method: 'DELETE',
			body: JSON.stringify({
				id: body.id
			})
		})
	})
)

export async function makeTaskPetition(HTTPMethod: HTTPMethod | GETMethod) {
	const options = HEADERS_MAP.get(HTTPMethod.method)
	if (options == null) return

	const extractBody = 'body' in HTTPMethod ? HTTPMethod.body : null
	const hasID = extractBody && 'id' in extractBody ? `/${extractBody.id}` : ''

	//@ts-expect-error i have no idea what does this means with "expects 1 argument but got 2"
	const bodyOptions = options.call(null, extractBody)
	const URL = `${URL_DATABASE}/tasks${hasID}`

	const response = await fetch(URL, {
		...bodyOptions,
		headers: {
			'Content-Type': 'application/json'
		}
	})
	console.log(response)
	if (response.status !== 200) throw new Error(response.statusText) //! create a new class for errors
	return response.json()
}
