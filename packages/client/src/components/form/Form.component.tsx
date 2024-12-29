import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { useTaskContext } from '@/hooks/useContext.hook'
import { METHODS_VERBS } from '@/context/types.d'

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
	const {
		nonGetHttpMethod: { setHTTPCall }
	} = useTaskContext()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			taskName: '',
			taskDescription: ''
		}
	})

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		setHTTPCall({
			method: METHODS_VERBS.POST,
			body: { name: values.taskName, description: values?.taskDescription || '' }
		})
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Create a new task</CardTitle>
				<CardDescription>Add a new task to your list</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form} control={form.control}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="mt-2 gap-y-4 flex flex-col items-center">
						<FieldFormComponent
							taskName="taskName"
							taskTitle="Title"
							placeholder="Wash the dishes, do house chores... "
							description="Add a name to your task"
						/>
						<FieldFormComponent
							taskName="taskDescription"
							taskTitle="Description"
							placeholder="Buy groceries tomorrow, visit grandma at the park... "
							description="Add a description to your task"
						/>
						<Button type="submit" className="px-6">
							Submit
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}

function FieldFormComponent({
	taskName,
	taskTitle,
	placeholder,
	description
}: {
	taskName: string
	taskTitle: string
	placeholder: string
	description: string
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
					<FormDescription>{description}</FormDescription>
				</FormItem>
			)}
		/>
	)
}
