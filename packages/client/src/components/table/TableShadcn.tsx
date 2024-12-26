import { taskProps } from '@/lib/types'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

import { MANAGE_DATES } from '@/utils/constants'
import { useTaskContext } from '@/hooks/useContext.hook'

const HEADER_CATEGORIES = ['ID', 'Name', 'Description', 'Status', 'Created at', 'Finished at']

function returnStatusTable(title: string) {
	return (
		<TableRow className="text-center font-medium">
			<TableCell colSpan={HEADER_CATEGORIES.length}>{title}</TableCell>
		</TableRow>
	)
}

export default function TableShadcn({ tasks }: { tasks: taskProps[] }) {
	const {
		getTasks: { isPending }
	} = useTaskContext()

	return (
		<Table>
			<TableHeader className="bg-zinc-500/20 hover:brightness-125 border-2 border-zinc-800">
				<TableRow className="align-middle">
					{HEADER_CATEGORIES.map((category) => {
						return (
							<TableHead className="cursor-default w-fit overflow-x-auto" key={category}>
								{category}
							</TableHead>
						)
					})}
				</TableRow>
			</TableHeader>

			<TableBody className="border-x-2 border-b-2 border-zinc-800">
				{isPending && returnStatusTable('Loading...')}
				{tasks.length > 0
					? tasks.map(({ id, name, description, status, createdAt, finishedAt }) => {
							return (
								<TableRow key={id}>
									<TableCell>{id}</TableCell>
									<TableCell>{name}</TableCell>
									<TableCell>{description ?? 'No description provided'}</TableCell>
									<TableCell>{status}</TableCell>
									<TableCell>{MANAGE_DATES(createdAt)}</TableCell>
									<TableCell>{MANAGE_DATES(finishedAt ?? '')}</TableCell>
								</TableRow>
							)
						})
					: returnStatusTable('No tasks found')}
			</TableBody>
		</Table>
	)
}
