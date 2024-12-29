import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
	children: ReactNode
	fallBackComponent: ReactNode
}

interface State {
	hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: Error) {
		console.log('error', error)
		// Update state so the next render will show the fallback UI.
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.log('error', error)
		console.log('errorInfo', errorInfo)
	}

	render() {
		if (this.state.hasError) return this.props.fallBackComponent
		return this.props.children
	}
}
