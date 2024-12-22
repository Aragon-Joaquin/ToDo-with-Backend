import { debounce } from '@/utils/debounce'
import { Input } from '../ui/input'
import { ChangeEvent } from 'react'
import { useGetTasks } from '@/hooks/getTasks'

export function FilterTask() {
	const { setFilter } = useGetTasks(null)

	const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setFilter({ Category: 'name', Value: e.target.value })
	}

	return (
		<Input
			placeholder="Filter by name"
			className="w-52 bg-black/30"
			onChange={debounce((e: ChangeEvent<HTMLInputElement>) => handleFilter(e), 500)}
		/>
	)
}
