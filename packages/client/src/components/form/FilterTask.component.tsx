import { debounce } from '@/utils/debounce'
import { Input } from '../ui/input'
import { ChangeEvent, useContext } from 'react'
import { TasksContext } from '@/context/utils/TaskContext'

export function FilterTask() {
	const {
		getTask: { setGETPetition }
	} = useContext(TasksContext)

	const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		// setGETPetition({ filter: { Category: 'name', Value: e.target.value } })
	}

	return (
		<Input
			placeholder="Filter by name"
			className="w-52 bg-black/30"
			onChange={debounce((e: ChangeEvent<HTMLInputElement>) => handleFilter(e), 500)}
		/>
	)
}
