import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function UseLink({ to, children, history}){
	const delayTime = 500
	const [flag, setFlag] = useState(false)
	const navigate = useNavigate()

	const linkDelay = (e) => {
		e.preventDefault()
		setFlag(true)
		setTimeout(()=>{
			console.log(navigate);
			setFlag(false)
			navigate(to)
		}, delayTime)
	}

	return (
		<>
			<Link to={to} onClick={linkDelay} style={{pointerEvents: flag ? 'none' : 'auto'}}>
				{children}	
			</Link>
		</>
	)
}
