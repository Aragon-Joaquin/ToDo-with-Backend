import TableShadcn from './components/table/TableShadcn'
import { TabsHelper } from './components/tabs/TabsHelper.component'
import { useEffect } from 'react'
import { useTaskContext } from './hooks/useContext.hook'

function App() {
	const {
		getTasks: { response, setOptionsInfo }
	} = useTaskContext()

	useEffect(() => {
		setOptionsInfo({})
	}, [setOptionsInfo])

	return (
		<main className="flex flex-col w-3/4 xl:w-1/2 mx-auto">
			<div className="h-1/2 flex flex-col items-center justify-center mt-10 bg-transparent/10 p-4	rounded-t-lg border-b-[1px] border-stone-100">
				<h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">Todo List</h1>
				<p className="mt-4">A simple ToDo app</p>
			</div>

			<TabsHelper />

			<div className="flex flex-col justify-center items-center gap-y-6 mb-24">
				<TableShadcn tasks={response} />
			</div>
		</main>
	)
}

export default App
