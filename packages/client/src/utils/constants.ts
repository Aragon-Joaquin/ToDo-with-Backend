export const URL_DATABASE = 'http://localhost:3000' as const

export const MANAGE_DATES = (date: string) => {
	const newDate = new Date(date)
	if (newDate.toString() === 'Invalid Date') return ''
	return newDate.toLocaleString('en-US', { timeZone: 'UTC', dateStyle: 'medium' })
}
