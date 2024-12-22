import { URL_DATABASE } from './constants'

export async function createTask(taskName: string, taskDescription: string = '') {
	try {
		await fetch(`${URL_DATABASE}/tasks`, {
			method: 'POST',
			body: JSON.stringify({
				name: taskName.trim(),
				description: taskDescription
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	} catch (error) {
		console.log(error)
	}
}
