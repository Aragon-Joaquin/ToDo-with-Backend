import { debounce } from '@/utils/debounce'
import { Input } from '../ui/input'
import { ChangeEvent } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { useTaskContext } from '@/hooks/useContext.hook'

export function FilterTask() {
	const {
		getTasks: { setOptionsInfo }
	} = useTaskContext()

	const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setOptionsInfo({ filterBy: { Category: 'name', Value: e.target.value }, HTTPMethod: { method: 'GET' } })
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Filter tasks</CardTitle>
				<CardDescription>Filter tasks by name</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex flex-row justify-center gap-x-2 mb-4 w-full">
					<Input
						placeholder="Filter by name"
						className="w-52 bg-black/30"
						onChange={debounce((e: ChangeEvent<HTMLInputElement>) => handleFilter(e), 500)}
					/>
					<Button type="submit" className="px-2">
						Search
					</Button>
				</div>
			</CardContent>
		</Card>
	)
}
