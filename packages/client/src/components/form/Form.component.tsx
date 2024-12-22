import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { createTask } from '@/utils/createTask'

function onSubmit(values: z.infer<typeof formSchema>) {
	createTask(values.taskName, values.taskDescription)
}

const formSchema = z
	.object({
		taskName: z
			.string()
			.min(5, {
				message: 'Username must be at least 5 characters.'
			})
			.max(30, { message: 'Task name must be at most 30 characters.' }),

		taskDescription: z.string().max(100, { message: 'Task description must be at most 100 characters.' })
	})
	.required({ taskName: true })

export function FormComponent() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			taskName: '',
			taskDescription: ''
		}
	})

	return (
		<div>
			<h3 className="text-xl font-medium text-center">Create a new task</h3>
			<Form {...form} control={form.control}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="mt-2 mb-4 flex flex-col items-center bg-neutral-900 p-4 rounded-lg border-2 border-neutral-700"
				>
					<div className=" flex flex-row justify-center gap-x-4 mb-4 w-full">
						<FieldFormComponent
							taskName="taskName"
							taskTitle="Title"
							placeholder="Wash the dishes, do house chores... "
						/>
						<FieldFormComponent
							taskName="taskDescription"
							taskTitle="Description"
							placeholder="Buy groceries tomorrow, visit grandma at the park... "
						/>
					</div>
					<Button type="submit" className="px-6 bg-neutral-800 hover:bg-neutral-700">
						Submit
					</Button>
				</form>
			</Form>
		</div>
	)
}

function FieldFormComponent({
	taskName,
	taskTitle,
	placeholder
}: {
	taskName: string
	taskTitle: string
	placeholder: string
}) {
	return (
		<FormField
			name={taskName}
			render={({ field }) => (
				<FormItem className="w-full">
					<FormLabel>{taskTitle}</FormLabel>
					<FormControl>
						<Input placeholder={placeholder} {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
