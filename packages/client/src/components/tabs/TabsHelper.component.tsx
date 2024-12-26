import { Tabs, TabsList, TabsContent, TabsTrigger } from '@radix-ui/react-tabs'
import { FilterTask } from '../form/FilterTask.component'
import { FormComponent } from '../form/Form.component'
import { ReactElement } from 'react'

type TabsHelperProps = {
	valueName: string
	informationTab: string
	component: ReactElement
}

const AVAILABLE_OPTIONS: TabsHelperProps[] = [
	{ valueName: 'Filter', informationTab: 'Filter tasks', component: <FilterTask /> },
	{ valueName: 'Form', informationTab: 'Create Task', component: <FormComponent /> }
]

export function TabsHelper() {
	return (
		<Tabs defaultValue={AVAILABLE_OPTIONS[0].valueName} className="my-10 rounded-lg h-fit w-1/2 mx-auto">
			<TabsList className="w-full flex flex-row justify-around items-center bg-zinc-900 border-b-2 border-stone-100 px-4 py-2 rounded-t-md font-medium">
				{AVAILABLE_OPTIONS.map(({ valueName, informationTab }) => (
					<TabsTrigger key={valueName} value={valueName} className="hover:scale-105 hover:text-zinc-100 transition-all">
						{informationTab}
					</TabsTrigger>
				))}
			</TabsList>
			{AVAILABLE_OPTIONS.map(({ valueName, component }) => (
				<TabsContent key={valueName} value={valueName} className="h-min">
					{component}
				</TabsContent>
			))}
		</Tabs>
	)
}
