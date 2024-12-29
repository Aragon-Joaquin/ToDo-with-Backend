import { debounce } from '@/utils/debounce'
import { Input } from '../ui/input'
import { ChangeEvent } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card'
import { useTaskContext } from '@/hooks/useContext.hook'

export function FilterTask() {
	const {
		getTasks: { setOptionsInfo }
	} = useTaskContext()

	const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setOptionsInfo({ filterBy: { Category: 'name', Value: e.target.value } })
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Filter tasks</CardTitle>
				<CardDescription>Filter tasks by name</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-row justify-center">
				<Input
					placeholder="Filter by name"
					className="w-2/3 bg-black/30"
					onChange={debounce((e: ChangeEvent<HTMLInputElement>) => handleFilter(e), 500)}
				/>
			</CardContent>
		</Card>
	)
}
