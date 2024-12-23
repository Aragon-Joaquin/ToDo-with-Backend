import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { TaskConsumer } from './context/Tasks.context.tsx'

//@ts-expect-error: fix this error later
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<TaskConsumer>
			<App />
		</TaskConsumer>
	</StrictMode>
)
