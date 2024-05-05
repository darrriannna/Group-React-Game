import { useEffect, useState } from "react"

export default function GameOverPage ( {score} ) {
	const [confirmation, setConfirmation] = useState(false)

	useEffect(() =>{
		if (!confirmation) {
			const result = window.confirm('The game is over')
		}
		setConfirmation(true)

	}, [confirmation])
	return (
		<div>
			<h1>Game Over</h1>
			<p>Your score: {score}</p>
		</div>
	)
}
