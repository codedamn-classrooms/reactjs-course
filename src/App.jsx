import React, { useState } from 'react'

function App() {
	// make changes
	const [counter, setCounter] = useState(0)

	return (
		<div>
			<h1>{counter}</h1>
			<div>
				<button onClick={() => setCounter((c) => c + 1)} id="increment">
					Increment
				</button>
				<button id="decrement" onClick={() => setCounter((c) => c - 1)}>
					Decrement
				</button>
			</div>
		</div>
	)
}

export default App
