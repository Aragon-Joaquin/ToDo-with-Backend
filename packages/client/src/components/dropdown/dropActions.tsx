import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '../ui/button'
import { Menu, Trash } from 'lucide-react'
import { useTaskContext } from '@/hooks/useContext.hook'
import { METHODS_VERBS } from '@/context/types.d'

export function DropActions({ taskID }: { taskID: number }) {
	const {
		nonGetHttpMethod: { setHTTPCall }
	} = useTaskContext()
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="h-8 w-8 p-0">
					<span className="sr-only">Open Action Menu</span> {/* it means "screenReaders only" */}
					<Menu className="h-4 w-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Actions</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Button
						variant="destructive"
						className="w-full py-2"
						onClick={() => setHTTPCall({ method: METHODS_VERBS.DELETE, body: { id: taskID } })}
					>
						<Trash />
						<span>Delete</span>
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
