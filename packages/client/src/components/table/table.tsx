import { getTasks } from '@/utils/getTasks'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../ui/table'
import { useEffect } from 'react'

const HEADER_CATEGORIES = ['Task name', 'Description', 'Status', 'Created at', 'Finished at']

export default function TableShadcn() {
	useEffect(() => {
		async function getData() {
			const data = await getTasks({ endpoint: 'tasks' })
			console.log({ data })
		}
		getData()
	}, [])

	return (
		<Table>
			<TableHeader>
				<TableRow>
					{HEADER_CATEGORIES.map((category) => {
						return (
							<TableHead className="cursor-default" key={category}>
								{category}
							</TableHead>
						)
					})}
				</TableRow>
			</TableHeader>
			<TableBody></TableBody>
		</Table>
	)
}
